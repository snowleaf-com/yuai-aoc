import parse from "html-react-parser";
import { useInView } from "react-intersection-observer";
import styles from "./TimelineItem.module.css";
interface TimelineItemProps {
  number: number;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  number,
  title,
  description,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineCircle}>{number}</div>
      <div
        className={`${styles.timelineContent} effect ${inView ? "start d_02" : ""}`}
        ref={ref}
      >
        <h2>{title}</h2>
        <p>{parse(description)}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
