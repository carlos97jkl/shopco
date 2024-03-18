"use client";

// @packages
import DialogContent from "@mui/material/DialogContent";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import { useForm } from "react-hook-form";
import { usePaymentInputs } from "react-payment-inputs";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Grid,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";

// @scripts
import BuySummary from "@/app/ui/molecules/buy-summary";
import CommonDialog from "@/app/ui/common/dialog";
import FormCreditCard from "@/app/ui/molecules/form-credit-card";
import useReplaceUrl from "@/app/hooks/useReplaceQuery";
import { closeDialog } from "@/app/redux/slices/dialog";
import { schema } from "./schema";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

// @styles
import styles from "./index.module.css";

// @types
import { RootState } from "@/app/redux/store";

const ModalCheckout = () => {
  const t = useTranslations();
  const params = useSearchParams();
  const { replaceUrl } = useReplaceUrl();
  const confirmBuy = params.get("confirmBuy");
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const paymentInputs = usePaymentInputs();
  const resolver = yupResolver(schema);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver,
  });

  const resetForm = () => {
    reset();
    setActiveStep(0);
  };

  const steps = [
    {
      title: t("paymentData"),
      component: () => (
        <FormCreditCard
          paymentInputs={paymentInputs}
          register={register}
          errors={errors}
        />
      ),
    },
    {
      title: t("summary"),
      component: () => <BuySummary resetForm={resetForm} />,
    },
  ];

  const isOpenModal = useSelector((state: RootState) => state.dialog);

  const handleCloseModal = () => {
    dispatch(closeDialog());
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const onSubmit = () => {
    const metaValues = Object.values(paymentInputs.meta.erroredInputs);

    if (metaValues.every((value) => !value)) {
      handleStep(activeStep + 1)();
    }
  };

  return (
    <>
      <CommonDialog
        isOpenDialog={isOpenModal}
        size="sm"
        title={t("checkoutPayment")}
        closeDialog={handleCloseModal}
      >
        <DialogContent className={styles.dialogContent}>
          <Stepper activeStep={activeStep}>
            {steps.map(({ title }, index) => (
              <Step key={title} completed={activeStep > index}>
                <StepButton color="inherit">{title}</StepButton>
              </Step>
            ))}
          </Stepper>
          {steps.map(({ title, component }, index) => (
            <React.Fragment key={title}>
              {index === activeStep && <Grid p="20px">{component()}</Grid>}
            </React.Fragment>
          ))}
        </DialogContent>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "10px 20px" }}
        >
          <Button
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            <KeyboardArrowLeft /> {t("back")}
          </Button>
          <Button
            color="primary"
            disabled={activeStep === steps.length - 1}
            onClick={handleSubmit(onSubmit)}
          >
            {t("next")} <KeyboardArrowRight />
          </Button>
        </Grid>
      </CommonDialog>
      <CommonDialog
        isOpenDialog={!!confirmBuy}
        size="sm"
        title={t("buyConfirmation")}
      >
        <DialogContent className={styles.dialogContent}>
          <Grid p="20px">
            <Typography variant="h6" align="center">
              {t("paymentSuccess")}
            </Typography>
          </Grid>
        </DialogContent>
        <Grid
          display="flex"
          justifyContent="end"
          style={{ padding: "10px 20px" }}
        >
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              replaceUrl("confirmBuy", "");
            }}
          >
            {t("close")}
          </Button>
        </Grid>
      </CommonDialog>
    </>
  );
};

export default ModalCheckout;
