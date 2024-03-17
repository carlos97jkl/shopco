"use client";

// @packages
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Grid,
  IconButton,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import FormCreditCard from "@/app/ui/molecules/form-credit-card";
import BuySummary from "@/app/ui/molecules/buy-summary";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentData } from "@/app/redux/slices/transaction";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePaymentInputs } from "react-payment-inputs";

// @styles
import styles from "./index.module.css";
import { useSearchParams } from "next/navigation";
import useReplaceUrl from "@/app/lib/hooks/useReplaceQuery";
import { useTranslations } from "next-intl";

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

  const isOpenModal = useSelector(
    (state: any) => state.dataTransaction.isDialogOpen,
  );

  const handleCloseModal = () => {
    dispatch(savePaymentData({ prop: "isDialogOpen", data: false }));
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
    <Dialog open={isOpenModal || confirmBuy} maxWidth="sm" fullWidth>
      <DialogTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">
            {confirmBuy ? t("buyConfirmation") : t("checkoutPayment")}
          </Typography>
          {!confirmBuy && (
            <IconButton size="medium" onClick={handleCloseModal}>
              <CloseIcon fontSize="medium" />
            </IconButton>
          )}
        </div>
      </DialogTitle>
      {confirmBuy && (
        <>
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
        </>
      )}
      {!confirmBuy && (
        <>
          <DialogContent className={styles.dialogContent}>
            <Stepper activeStep={activeStep}>
              {steps.map(({ title }, index) => (
                <Step key={title} completed={activeStep > index}>
                  <StepButton color="inherit">{title}</StepButton>
                </Step>
              ))}
            </Stepper>
            {steps.map(({ title, component }, index) => (
              <>
                {index === activeStep && (
                  <Grid p="20px" key={title}>
                    {component()}
                  </Grid>
                )}
              </>
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
              onClick={
                activeStep === 0
                  ? handleSubmit(onSubmit)
                  : handleStep(activeStep + 1)
              }
            >
              {t("next")} <KeyboardArrowRight />
            </Button>
          </Grid>
        </>
      )}
    </Dialog>
  );
};

export default ModalCheckout;
