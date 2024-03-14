// @packages
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const QuantitySelector = () => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant="subtitle1">Quantity</Typography>
    </Grid>
    <IconButton size="small">
      <AddIcon fontSize="small" />
    </IconButton>
    <TextField size="small" style={{ maxWidth: "100px", margin: "5px" }} />
    <IconButton size="small">
      <RemoveIcon fontSize="small" />
    </IconButton>
  </Grid>
);

export default QuantitySelector;
