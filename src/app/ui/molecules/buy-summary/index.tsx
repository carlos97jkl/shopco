"use client";
// @packages
import { Button, Divider, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";

// @scripts
import useReplaceUrl from "@/app/lib/hooks/useReplaceQuery";
import { deletePaymentData } from "@/app/redux/slices/transaction";
import { openSnackbar } from "@/app/redux/slices/alert";
import { verifyPay } from "@/app/lib/actions";

// @constants
type TBuySummary = {
  resetForm: () => void;
};

const BuySummary = ({ resetForm }: TBuySummary) => {
  const t = useTranslations();
  const dispatch = useDispatch();
  const { replaceUrl } = useReplaceUrl();
  const dataTransaction = useSelector((state: any) => state.dataTransaction);
  const { nameProduct, price, quantity, numberOfPayments, total } =
    dataTransaction;
  const handleProcessPayment = async () => {
    const res = await verifyPay(dataTransaction);
    if (res) {
      dispatch(deletePaymentData());
      replaceUrl("confirmBuy", "true");
      resetForm();
    } else {
      dispatch(openSnackbar(t("paymentFailed")));
    }
  };

  return (
    <Grid container xs={12} gap={2}>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>{t("product")}:</b>
        </Typography>
        <Typography>{nameProduct}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>{t("price")}:</b>
        </Typography>
        <Typography>
          {Number(price?.toFixed(2)).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>{t("quantity")}:</b>
        </Typography>
        <Typography>{quantity}</Typography>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>{t("payments")}:</b>
        </Typography>
        <Typography>
          {numberOfPayments}x{" "}
          {Number((total / numberOfPayments).toFixed(2)).toLocaleString(
            "en-US",
            {
              style: "currency",
              currency: "USD",
            },
          )}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>{t("paymentMethod")}:</b>
        </Typography>
        <Typography>{t("creditCard")}</Typography>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>{t("total")}:</b>
        </Typography>
        <Typography>
          {Number(total.toFixed(2)).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      </Grid>
      <Grid xs={12} padding="20px 50px 0px 50px" marginTop="5px">
        <Button
          color="success"
          disableElevation
          fullWidth
          onClick={handleProcessPayment}
          style={{ borderRadius: "10px" }}
          variant="contained"
        >
          {t("payNow")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default BuySummary;
