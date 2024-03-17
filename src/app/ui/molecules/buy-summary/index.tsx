"use client";
import { verifyPay } from "@/app/lib/actions";
import { openSnackbar } from "@/app/redux/slices/alert";
import { deletePaymentData } from "@/app/redux/slices/transaction";
import { Button, Divider, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import useReplaceUrl from "@/app/lib/hooks/commonFunctions";

const BuySummary = () => {
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
    } else {
      dispatch(openSnackbar("Payment Failed"));
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
          <b>Product:</b>
        </Typography>
        <Typography>{nameProduct}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>Price:</b>
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
          <b>Quantity:</b>
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
          <b>Payments:</b>
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
          <b>Payment Method:</b>
        </Typography>
        <Typography>Credit Card</Typography>
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
          <b>Total:</b>
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
          onClick={handleProcessPayment}
          fullWidth
          variant="contained"
          color="success"
          disableElevation
          style={{ borderRadius: "10px" }}
        >
          Pay Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default BuySummary;
