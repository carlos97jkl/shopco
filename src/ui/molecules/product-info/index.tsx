import QuantitySelector from "@/ui/atoms/quantity-selector";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

type TProductInfo = {
  title: string;
  price: string;
  description: string;
};

const ProductInfo = ({ title, price, description }: TProductInfo) => {
  return (
    <Grid container gap={4}>
      <Grid item xs={12}>
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
      <Grid>
        <QuantitySelector />
      </Grid>
    </Grid>
  );
};

export default ProductInfo;
