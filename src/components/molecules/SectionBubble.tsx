import DetailSectionTitle from "../atoms/DetailSectionTitle";
import styles from "./SectionBubble.module.css";

type SectionBubbleProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
};

const SectionBubble: React.FC<SectionBubbleProps> = ({
  title,
  subtitle,
  className = "",
  children,
  inView = false,
}) => {
  return (
    <div className={`${styles.sectionBubble} ${className}`}>
      <DetailSectionTitle title={title} subtitle={subtitle} inView={inView} />
      {children}
    </div>
  );
};

export default SectionBubble;