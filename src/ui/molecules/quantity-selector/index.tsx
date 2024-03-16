// @packages
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

// @styles
import styles from "./index.module.css";

type TQuantitySelector = {
  handleQuantity: (quantity: number) => void;
  quantity: number;
};

const QuantitySelector = ({ handleQuantity, quantity }: TQuantitySelector) => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant="subtitle1">
        <b>Quantity</b>
      </Typography>
    </Grid>
    <Grid item display="flex" alignContent="center">
      <div className={styles.iconButtonQuantity}>
        <IconButton size="small" onClick={() => handleQuantity(quantity - 1)}>
          <RemoveCircleOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
      <TextField
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        onChange={(event) => handleQuantity(+event.target.value)}
        size="small"
        style={{ maxWidth: "100px", margin: "5px" }}
        value={quantity}
      />
      <div className={styles.iconButtonQuantity}>
        <IconButton onClick={() => handleQuantity(quantity + 1)} size="small">
          <ControlPointOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
    </Grid>
  </Grid>
);

export default QuantitySelector;
