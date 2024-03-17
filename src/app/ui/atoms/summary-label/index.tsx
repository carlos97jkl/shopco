// @packages
import { Grid, Typography } from "@mui/material";

type TSummaryLabel = {
  label: string;
  value: string;
};

const SummaryLabel = ({ label, value }: TSummaryLabel) => (
  <Grid
    item
    style={{ display: "flex", justifyContent: "space-between" }}
    xs={12}
  >
    <Typography>
      <b>{`${label}:`}</b>
    </Typography>
    <Typography>{value}</Typography>
  </Grid>
);

export default SummaryLabel;
