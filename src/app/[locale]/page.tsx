// @packages
import { Grid, Typography } from "@mui/material";

// @scripts
import ImageViewer from "@/app/ui/organisms/image-viewer";
import ModalCheckout from "@/app/ui/organisms/modal-checkout";
import ProductInfo from "@/app/ui/product-info";
import { getProduct } from "@/app/lib/actions";

// @styles
import styles from "./page.module.css";

// @types
import { Product } from "@/app/utils/types";

const Home = async () => {
  const product: Product = await getProduct();

  return (
    <>
      <ModalCheckout />
      <Grid container mt="30px">
        <Grid item xs={12} display={{ xs: "flex", md: "none" }}>
          <Typography variant="h4">{product.title}</Typography>
        </Grid>
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
    </>
  );
};

export default Home;
