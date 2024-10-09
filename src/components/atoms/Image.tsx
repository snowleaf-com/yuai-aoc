import styles from "@/components/atoms/Image.module.css";
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string; // 単位を指定するためにstring型に変更
  height?: string; // 単位を指定するためにstring型に変更
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
}) => (
  <div className={`${styles[className || ""]}`} style={{ width, height }}>
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

export default Image;
