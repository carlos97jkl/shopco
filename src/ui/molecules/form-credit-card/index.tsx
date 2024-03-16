"use client";
// @packages
import images from "react-payment-inputs/images";
import { Grid, TextField } from "@mui/material";
import { usePaymentInputs } from "react-payment-inputs";
import { useState } from "react";

const FormCreditCard = () => {
  const {
    getCVCProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
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
          fullWidth
          label="Credit card number"
          size="small"
          variant="outlined"
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
        />
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Expiry date"
            size="small"
            variant="outlined"
            inputProps={{
              value: experyDate,
              ...getExpiryDateProps({
                onChange: (event: any) => setExperyDate(event.target.value),
              }),
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Security code (CVC)"
            size="small"
            variant="outlined"
            inputProps={{
              value: securityCode,
              ...getCVCProps({
                onChange: (event: any) => setSecurityCode(event.target.value),
              }),
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Cardholder's name"
          size="small"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Cardholder ID"
          size="small"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Number of payments"
          size="small"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
export default FormCreditCard;
