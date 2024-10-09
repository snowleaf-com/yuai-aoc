import parse from "html-react-parser";
import { useInView } from "react-intersection-observer";
import styles from "./TreatCard.module.css";
import Img from "./Image";

interface TreatCardProps {
  index: number;
  imgUrl: string;
  treatTitle: string;
  treatDetail: string;
}

const TreatCard: React.FC<TreatCardProps> = ({
  imgUrl,
  treatTitle,
  treatDetail,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className={styles.column2} ref={ref} style={{ marginBottom: "32px" }}>
      <div
        className={`${styles.left} ${styles.reverse2} effect ${
          inView ? "start" : ""
        } ${inView ? "d_02" : ""}`}
      >
        <Img src={imgUrl} alt={treatTitle} className="treatImg" />
      </div>
      <div
        className={`${styles.right} ${styles.reverse} effect ${
          inView ? "start" : ""
        } ${inView ? "d_04" : ""}`}
      >
        <h4>{treatTitle}</h4>
        <span>{parse(treatDetail)}</span>
      </div>
    </div>
  );
};

export default TreatCard;
