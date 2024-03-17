"use client";

// @packages
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";

// @scripts
import QuantitySelector from "@/app/ui/molecules/quantity-selector";
import { formatCurrency } from "@/app/utils/commonFunctions";
import { openDialog } from "@/app/redux/slices/dialog";
import { savePaymentData } from "@/app/redux/slices/transaction";

// @types
import { RootState } from "@/app/redux/store";

type TProductInfo = {
  title: string;
  price: string;
  description: string;
};

const ProductInfo = ({ title, price, description }: TProductInfo) => {
  const t = useTranslations();
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state: RootState) => state.dataTransaction.quantity,
  );

  const total = +price * quantity;

  const handleOpenModal = () => {
    dispatch(openDialog());
    dispatch(savePaymentData({ prop: "nameProduct", data: title }));
    dispatch(savePaymentData({ prop: "price", data: +price }));
    dispatch(savePaymentData({ prop: "total", data: total }));
  };

  return (
    <Grid container gap={4}>
      <Grid item xs={12} display={{ xs: "none", md: "flex" }}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          <b>{t("aboutThisArticle")}:</b>
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <b>{`${t("price")}: `}</b>
          {formatCurrency(+price)}
        </Typography>
      </Grid>
      <Grid item>
        <QuantitySelector />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Button
          disabled={quantity === 0}
          variant="contained"
          color="success"
          disableElevation
          style={{ borderRadius: "10px" }}
          onClick={handleOpenModal}
        >
          {t("payWithCreditCard")} - {formatCurrency(total)}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;
