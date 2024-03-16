"use client";

import { savePaymentData } from "@/app/redux/slices/transaction";
import QuantitySelector from "@/app/ui/molecules/quantity-selector";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

type TProductInfo = {
  title: string;
  price: string;
  description: string;
};

const ProductInfo = ({ title, price, description }: TProductInfo) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: any) => state.dataTransaction.quantity);

  const total = +price * quantity;

  const handleOpenModal = () => {
    dispatch(savePaymentData({ prop: "isDialogOpen", data: true }));
    dispatch(savePaymentData({ prop: "price", data: +price }));
    dispatch(savePaymentData({ prop: "total", data: total }));
    dispatch(savePaymentData({ prop: "nameProduct", data: title }));
  };

  return (
    <Grid container gap={4}>
      <Grid item xs={12} display={{ xs: "none", md: "flex" }}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">
          <b>About this article:</b>
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <b>Price:</b>
          {` $${price}.00`}
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
          Pay with credit card - {`$${total.toFixed(2).toLocaleString()}`}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;
