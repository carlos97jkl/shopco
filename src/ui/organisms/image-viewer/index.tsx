"use client";

// @packages
import Image from "next/image";

// @scripts
import ButtonImage from "@/ui/atoms/button-image";
import Grid from "@mui/material/Grid";

// @styles
import styles from "./index.module.css";
import { useState } from "react";

type TImageViewer = {
  imageList?: string[];
};

const ImageViewer = ({ imageList = [] }: TImageViewer) => {
  const [currentImage, setCurrentImage] = useState<string>("");

  const changeImage = (url: string) => {
    setCurrentImage(url);
  };

  return (
    <Grid container spacing={1}>
      <Grid className={styles.imageViewer} item xs={12}>
        <div className={styles.productImageWrapper}>
          <img
            alt="Product Image"
            className={styles.productImage}
            src={currentImage || imageList[1]}
          />
        </div>
      </Grid>
      <Grid item container xs={12} spacing={2} className={styles.imageViewer}>
        {imageList?.map((imageUrl: string) => (
          <Grid key={imageUrl} item>
            <ButtonImage
              isImageSelected={currentImage === imageUrl}
              onClick={() => changeImage(imageUrl)}
              url={imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ImageViewer;
