"use client";
// @packages
import images from "react-payment-inputs/images";
import { Grid, TextField } from "@mui/material";
import { usePaymentInputs } from "react-payment-inputs";
import { useState } from "react";
import { savePaymentData } from "@/app/redux/slices";
import { useDispatch, useSelector } from "react-redux";

const FormCreditCard = () => {
  const dispatch = useDispatch();
  const {
    cardNumber,
    expiryDate,
    securityCode,
    cardholderName,
    cardholderID,
    numberOfPayments,
  } = useSelector((state: any) => state.dataTransaction);
  const {
    getCVCProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
  } = usePaymentInputs();
  const handleChangeField = (propSave: string, event: any) => {
    dispatch(savePaymentData({ prop: propSave, data: event.target.value }));
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
              onChange: (event: any) => handleChangeField("cardNumber", event),
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
              value: expiryDate,
              ...getExpiryDateProps({
                onChange: (event: any) =>
                  handleChangeField("expiryDate", event),
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
                onChange: (event: any) =>
                  handleChangeField("securityCode", event),
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
          value={cardholderName}
          onChange={(event) => handleChangeField("cardholderName", event)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Cardholder ID"
          size="small"
          variant="outlined"
          value={cardholderID}
          onChange={(event) => handleChangeField("cardholderID", event)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Number of payments"
          size="small"
          variant="outlined"
          value={numberOfPayments}
          onChange={(event) => handleChangeField("numberOfPayments", event)}
        />
      </Grid>
    </Grid>
  );
};
export default FormCreditCard;
