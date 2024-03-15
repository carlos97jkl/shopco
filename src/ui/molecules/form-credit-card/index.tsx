"use client";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

const FormCreditCard = () => {
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs();
  const [cardNumber, setCardNumber] = useState();
  const [experyDate, setExperyDate] = useState();
  const [securityCode, setSecurityCode] = useState();
  const handleChangeCardNumber = (event: any) => {
    setCardNumber(event?.target?.value);
  };
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <TextField
          InputProps={{
            startAdornment: (
              <svg
                {...getCardImageProps({ images })}
                style={{ paddingRight: "5px" }}
              />
            ),
          }}
          inputProps={{
            value: cardNumber,
            ...getCardNumberProps({
              onChange: handleChangeCardNumber,
            }),
          }}
          fullWidth
          size="small"
          variant="outlined"
          label="Credit card number"
        />
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item xs={3}>
          <TextField
            inputProps={{
              value: experyDate,
              ...getExpiryDateProps({
                onChange: (event: any) => setExperyDate(event.target.value),
              }),
            }}
            size="small"
            fullWidth
            variant="outlined"
            label="Expiry date"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            inputProps={{
              value: securityCode,
              ...getCVCProps({
                onChange: (event: any) => setSecurityCode(event.target.value),
              }),
            }}
            size="small"
            fullWidth
            variant="outlined"
            label="Security code (CVC)"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          label="Cardholder's name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          label="Cardholder ID"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          label="Number of payments"
        />
      </Grid>
    </Grid>
  );
};
export default FormCreditCard;
