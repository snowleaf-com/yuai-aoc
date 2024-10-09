import Image from "../atoms/Image";
import styles from "@/components/molecules/ImageArea.module.css";

interface ImageData {
  src: string;
  alt: string;
  className: string;
  width?: string;
  height?: string;
}

interface ImageAreaProps {
  images: ImageData[];
}

const ImageArea: React.FC<ImageAreaProps> = ({ images }) => (
  <div className={styles.imgArea}>
    {images.map((image, index) => (
      <Image
        key={index}
        src={image.src}
        alt={image.alt}
        className={image.className}
        width={image.width}
        height={image.height}
      />
    ))}
  </div>
);

export default ImageArea;
