// @packages
import IconButton from "@mui/material/IconButton";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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
      <div style={{ margin: "auto" }}>
        <IconButton size="small" onClick={() => handleQuantity(quantity - 1)}>
          <RemoveCircleOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
      <TextField
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        size="small"
        style={{ maxWidth: "100px", margin: "5px" }}
        value={quantity}
        onChange={(event) => handleQuantity(+event.target.value)}
      />
      <div style={{ margin: "auto" }}>
        <IconButton onClick={() => handleQuantity(quantity + 1)} size="small">
          <ControlPointOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
    </Grid>
  </Grid>
);

export default QuantitySelector;
