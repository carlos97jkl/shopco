"use client";

import { savePaymentData } from "@/app/redux/slices";
import QuantitySelector from "@/app/ui/molecules/quantity-selector";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";

type TProductInfo = {
  title: string;
  price: string;
  description: string;
};

const ProductInfo = ({ title, price, description }: TProductInfo) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(savePaymentData({ prop: "isDialogOpen", data: true }));
  };

  const handleQuantity = (quantityProduct: number) => {
    if (quantityProduct < 0) {
      setQuantity(0);
      return;
    }
    setQuantity(quantityProduct);
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
        <QuantitySelector handleQuantity={handleQuantity} quantity={quantity} />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="success"
          disableElevation
          style={{ borderRadius: "10px" }}
          onClick={handleOpenModal}
        >
          Pay with credit card - {`$${+price * quantity}.00`}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;