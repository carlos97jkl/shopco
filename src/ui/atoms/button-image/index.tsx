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
        src={url}
        alt="Screenshots of the dashboard"
        width={64}
        height={60}
        className="block md:hidden"
      />
    </div>
  );
};
export default ButtonImage;
