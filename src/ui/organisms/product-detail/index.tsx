"use client";
// @packages
import { getProduct } from "@/app/lib/actions";
import ImageViewer from "@/ui/molecules/image-viewer";

// @scripts
import { Grid, Typography } from "@mui/material";
import ProductInfo from "@/ui/molecules/product-info";
import ModalCheckout from "@/ui/molecules/modal-checkout";

// @styles
import styles from "./index.module.css";
import { useEffect, useState } from "react";
const ProductDetail = () => {
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

export default ProductDetail;
