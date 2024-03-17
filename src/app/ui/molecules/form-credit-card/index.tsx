"use client";
// @packages
import images from "react-payment-inputs/images";
import { Grid, TextField } from "@mui/material";
import { savePaymentData } from "@/app/redux/slices/transaction";
import { useDispatch, useSelector } from "react-redux";

const FormCreditCard = ({ paymentInputs, register, errors }: any) => {
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
    meta,
    getCVCProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
  } = paymentInputs;

  const handleChangeField = (propSave: string, event: any) => {
    dispatch(savePaymentData({ prop: propSave, data: event.target.value }));
  };

  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <TextField
          error={!!meta.erroredInputs.cardNumber && cardNumber !== null}
          fullWidth
          helperText={cardNumber !== null && meta.erroredInputs.cardNumber}
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
              onChange: (event: any) => {
                handleChangeField("cardNumber", event);
              },
            }),
          }}
        />
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item xs={3}>
          <TextField
            error={!!meta.erroredInputs.expiryDate && expiryDate !== null}
            fullWidth
            helperText={expiryDate !== null && meta.erroredInputs.expiryDate}
            label="Expiry date"
            size="small"
            variant="outlined"
            inputProps={{
              value: expiryDate,
              ...getExpiryDateProps({
                onChange: (event: any) => {
                  handleChangeField("expiryDate", event);
                },
              }),
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            error={!!meta.erroredInputs.cvc && securityCode !== null}
            fullWidth
            helperText={securityCode !== null && meta.erroredInputs.cvc}
            label="Security code (CVC)"
            size="small"
            variant="outlined"
            inputProps={{
              value: securityCode,
              ...getCVCProps({
                onChange: (event: any) => {
                  handleChangeField("securityCode", event);
                },
              }),
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={!!errors.cardholderName}
          fullWidth
          helperText={errors.cardholderName?.message as string}
          label="Cardholder's name"
          size="small"
          value={cardholderName}
          variant="outlined"
          {...register("cardholderName", {
            onChange: (event: any) =>
              handleChangeField("cardholderName", event),
          })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={!!errors.cardholderID}
          fullWidth
          helperText={errors.cardholderID?.message as string}
          label="Cardholder ID"
          size="small"
          value={cardholderID}
          variant="outlined"
          {...register("cardholderID", {
            onChange: (event: any) => handleChangeField("cardholderID", event),
          })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={!!errors.numberOfPayments}
          fullWidth
          helperText={errors.numberOfPayments?.message as string}
          label="Number of payments"
          required
          size="small"
          variant="outlined"
          value={numberOfPayments}
          {...register("numberOfPayments", {
            onChange: (event: any) =>
              handleChangeField("numberOfPayments", event),
          })}
        />
      </Grid>
    </Grid>
  );
};

export default FormCreditCard;
