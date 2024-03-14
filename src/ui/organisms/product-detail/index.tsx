// @packages
import { getProduct } from "@/app/lib/actions";
import ImageViewer from "@/ui/molecules/image-viewer";

// @scripts
import { Grid, Typography } from "@mui/material";
import ProductInfo from "@/ui/molecules/product-info";

// @styles
import styles from "./index.module.css";
const ProductDetail = async () => {
  const product = await getProduct();

  return (
    <Grid container mt="30px">
      <Grid item xs={12} md={8}>
        <ImageViewer imageList={product.images} />
      </Grid>
      <Grid item xs={12} md={4} className={styles.productInfoContainer}>
        <ProductInfo
          title={product.title}
          price={product.price}
          description={product.description}
        />
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
