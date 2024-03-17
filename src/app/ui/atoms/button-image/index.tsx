// @packages
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";

// @styles
import styles from "./index.module.css";

type TButtonImage = {
  url: string;
  onClick: () => void;
  isImageSelected: boolean;
};

const ButtonImage = ({ url, onClick, isImageSelected }: TButtonImage) => {
  const t = useTranslations();

  return (
    <div
      onClick={onClick}
      className={clsx([
        styles.divImage,
        isImageSelected ? styles.imageFocus : "",
      ])}
    >
      <Image alt={t("imageSelector")} height={60} src={url} width={64} />
    </div>
  );
};

export default ButtonImage;
