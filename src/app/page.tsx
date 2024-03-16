"use client";
// @packages
import ImageViewer from "@/ui/organisms/image-viewer";
import { getProduct } from "@/app/lib/actions";
import { useEffect, useState } from "react";

// @scripts
import ModalCheckout from "@/ui/organisms/modal-checkout";
import ProductInfo from "@/ui/organisms/product-info";
import { Grid, Typography } from "@mui/material";

// @styles
import styles from "./page.module.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState({} as any);

  const getProductData = async () => {
    const productsData = await getProduct();
    console.log(productsData);
    setProduct(productsData);
  };

  const changeModalState = (modal: boolean) => {
    setOpenModal(modal);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <ModalCheckout
        isOpenModal={openModal}
        setIsOpenModal={changeModalState}
      />
      <Grid container mt="30px">
        <Grid item xs={12} display={{ xs: "flex", md: "none" }}>
          <Typography variant="h4">{product.title}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <ImageViewer imageList={product.images} />
        </Grid>
        <Grid item xs={12} md={4} className={styles.productInfoContainer}>
          <ProductInfo
            changeModal={changeModalState}
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
