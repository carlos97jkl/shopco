"use client";

// @packages
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";

// @scripts
import { savePaymentData } from "@/app/redux/slices/transaction";

// @types
import { RootState } from "@/app/redux/store";

const QuantitySelector = () => {
  const t = useTranslations();
  const quantity = useSelector(
    (state: RootState) => state.dataTransaction.quantity,
  );
  const dispatch = useDispatch();

  const handleQuantity = (quantityProduct: number) => {
    if (quantityProduct < 0) {
      dispatch(savePaymentData({ prop: "quantity", data: 0 }));
      return;
    }
    dispatch(savePaymentData({ prop: "quantity", data: quantityProduct }));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <b>{t("quantity")}</b>
        </Typography>
      </Grid>
      <Grid item display="flex" alignContent="center">
        <div style={{ margin: "auto" }}>
          <IconButton
            disabled={quantity === 0}
            onClick={() => handleQuantity(quantity - 1)}
            size="small"
          >
            <RemoveCircleOutlineOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <TextField
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleQuantity(+event.target.value)
          }
          size="small"
          style={{ maxWidth: "100px", margin: "5px" }}
          value={quantity}
        />
        <div style={{ margin: "auto" }}>
          <IconButton onClick={() => handleQuantity(quantity + 1)} size="small">
            <ControlPointOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default QuantitySelector;
