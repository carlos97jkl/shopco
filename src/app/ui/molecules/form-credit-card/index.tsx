"use client";

// @packages
import images from "react-payment-inputs/images";
import { ChangeEvent } from "react";
import { Grid, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { usePaymentInputs } from "react-payment-inputs";
import { useTranslations } from "next-intl";

// @scripts
import { RootState } from "@/app/redux/store";
import { TTransaction, savePaymentData } from "@/app/redux/slices/transaction";

type TFormCreditCard = {
  errors: any;
  paymentInputs: ReturnType<typeof usePaymentInputs>;
  register: UseFormRegister<any>;
};

const FormCreditCard = ({
  errors,
  paymentInputs,
  register,
}: TFormCreditCard) => {
  const imagesCard = images as any;
  const t = useTranslations();
  const dispatch = useDispatch();
  const {
    cardNumber,
    cardholderID,
    cardholderName,
    expiryDate,
    numberOfPayments,
    securityCode,
  } = useSelector((state: RootState) => state.dataTransaction);

  const {
    getCVCProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    meta,
  } = paymentInputs;

  const handleChangeField = (
    propSave: TTransaction,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(savePaymentData({ prop: propSave, data: event.target.value }));
  };

  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <TextField
          error={!!meta.erroredInputs?.cardNumber && cardNumber !== null}
          fullWidth
          helperText={cardNumber !== null && meta.erroredInputs?.cardNumber}
          label={t("creditCardNumber")}
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <svg
                {...getCardImageProps({ images: imagesCard })}
                style={{ paddingRight: "5px" }}
              />
            ),
          }}
          inputProps={{
            value: cardNumber,
            ...getCardNumberProps({
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                handleChangeField("cardNumber", event);
              },
            }),
          }}
        />
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item xs={3}>
          <TextField
            error={!!meta.erroredInputs?.expiryDate && expiryDate !== null}
            fullWidth
            helperText={expiryDate !== null && meta.erroredInputs?.expiryDate}
            label={t("expiryDate")}
            size="small"
            variant="outlined"
            inputProps={{
              value: expiryDate,
              ...getExpiryDateProps({
                onChange: (event: ChangeEvent<HTMLInputElement>) => {
                  handleChangeField("expiryDate", event);
                },
              }),
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            error={!!meta.erroredInputs?.cvc && securityCode !== null}
            fullWidth
            helperText={securityCode !== null && meta.erroredInputs?.cvc}
            label={t("securityCode")}
            size="small"
            variant="outlined"
            inputProps={{
              value: securityCode,
              ...getCVCProps({
                onChange: (event: ChangeEvent<HTMLInputElement>) => {
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
          label={t("cardholderName")}
          size="small"
          value={cardholderName}
          variant="outlined"
          {...register("cardholderName", {
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              handleChangeField("cardholderName", event),
          })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={!!errors.cardholderID}
          fullWidth
          helperText={errors.cardholderID?.message as string}
          label={t("cardholderID")}
          size="small"
          value={cardholderID}
          variant="outlined"
          {...register("cardholderID", {
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              handleChangeField("cardholderID", event),
          })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={!!errors.numberOfPayments}
          fullWidth
          helperText={errors.numberOfPayments?.message as string}
          label={t("numberOfPayments")}
          required
          size="small"
          value={numberOfPayments}
          variant="outlined"
          {...register("numberOfPayments", {
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              handleChangeField("numberOfPayments", event),
          })}
        />
      </Grid>
    </Grid>
  );
};

export default FormCreditCard;
