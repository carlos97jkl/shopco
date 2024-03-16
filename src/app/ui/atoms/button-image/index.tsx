// @packages
import Image from "next/image";
import clsx from "clsx";

// @styles
import styles from "./index.module.css";
type TButtonImage = {
  url: string;
  onClick: () => void;
  isImageSelected: boolean;
};
const ButtonImage = ({ url, onClick, isImageSelected }: TButtonImage) => {
  return (
    <div
      onClick={onClick}
      className={clsx([
        styles.divImage,
        isImageSelected ? styles.imageFocus : "",
      ])}
    >
      <Image
        alt="Screenshots of the dashboard"
        className="block md:hidden"
        height={60}
        src={url}
        width={64}
      />
    </div>
  );
};
export default ButtonImage;
