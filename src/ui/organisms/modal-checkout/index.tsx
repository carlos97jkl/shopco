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
  StepContent,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import FormCreditCard from "@/ui/atoms/form-credit-card";
import BuySummary from "@/ui/atoms/buy-summary";

type TModalCheckout = {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
};

const ModalCheckout = ({ isOpenModal, setIsOpenModal }: TModalCheckout) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "Payment Data", component: () => <FormCreditCard /> },
    { title: "Summary", component: () => <BuySummary /> },
  ];
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log(activeStep);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Dialog open={isOpenModal} maxWidth="sm" fullWidth>
      <DialogTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Payment Checkout</Typography>
          <IconButton size="medium" onClick={() => setIsOpenModal(false)}>
            <CloseIcon fontSize="medium" />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent style={{ height: "400px" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map(({ title }, index) => (
            <Step key={title} completed={activeStep > index}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {title}
              </StepButton>
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
          <KeyboardArrowLeft /> Back
        </Button>
        <Button
          color="primary"
          disabled={activeStep === steps.length - 1}
          onClick={handleStep(activeStep + 1)}
        >
          Next <KeyboardArrowRight />
        </Button>
      </Grid>
    </Dialog>
  );
};

export default ModalCheckout;
