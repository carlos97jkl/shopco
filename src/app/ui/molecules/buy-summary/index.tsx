"use client";

// @packages
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";

// @scripts
import SummaryLabel from "@/app/ui/atoms/summary-label";
import useReplaceUrl from "@/app/hooks/useReplaceQuery";
import { closeDialog } from "@/app/redux/slices/dialog";
import { deletePaymentData } from "@/app/redux/slices/transaction";
import { formatCurrency } from "@/app/utils/commonFunctions";
import { openSnackbar } from "@/app/redux/slices/alert";
import { verifyPay } from "@/app/lib/actions";

type TBuySummary = {
  resetForm: () => void;
};

type TLabel = {
  label: string;
  value: string;
};

const BuySummary = ({ resetForm }: TBuySummary) => {
  const t = useTranslations();
  const dispatch = useDispatch();
  const { replaceUrl } = useReplaceUrl();
  const dataTransaction = useSelector((state: any) => state.dataTransaction);
  const { nameProduct, price, quantity, numberOfPayments, total } =
    dataTransaction;

  const labels: TLabel[] = [
    { label: t("product"), value: nameProduct },
    { label: t("price"), value: formatCurrency(price) },
    { label: t("quantity"), value: quantity },
    {
      label: t("numberOfPayments"),
      value: `${numberOfPayments}x ${formatCurrency(total / numberOfPayments)}`,
    },
    { label: t("paymentMethod"), value: t("creditCard") },
    { label: t("total"), value: formatCurrency(total) },
  ];

  const handleProcessPayment = async () => {
    const res = await verifyPay(dataTransaction);
    if (res) {
      dispatch(deletePaymentData());
      dispatch(closeDialog());
      replaceUrl("confirmBuy", "true");
      resetForm();
    } else {
      dispatch(openSnackbar(t("paymentFailed")));
    }
  };

  return (
    <Grid container gap={2}>
      {labels.map(({ label, value }: TLabel) => (
        <SummaryLabel key={label} label={label} value={value} />
      ))}
      <Grid item xs={12} padding="20px 50px 0px 50px" marginTop="5px">
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
