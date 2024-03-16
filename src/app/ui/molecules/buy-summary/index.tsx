import { Button, Divider, Grid } from "@mui/material";
import { Typography } from "@mui/material";

const BuySummary = () => {
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
        <Typography>buzo</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>Price:</b>
        </Typography>
        <Typography>$98.00</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>Quantity:</b>
        </Typography>
        <Typography>3</Typography>
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
        <Typography>36x $340.00</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>
          <b>Payment Method:</b>
        </Typography>
        <Typography>Credit Card - Amex</Typography>
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
        <Typography>$34000.00</Typography>
      </Grid>
      <Grid xs={12} padding="20px 50px 0px 50px" marginTop="5px">
        <Button
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
