import styles from "./SectionBorderOrange.module.css";
import SectionTitleWithBorder from "../atoms/SectionTitleWithBorder";

type SectionBorderOrangeProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
};

const SectionBorderOrange: React.FC<SectionBorderOrangeProps> = ({
  title,
  subtitle,
  children,
  className = "",
  inView = false,
}) => {
  return (
    <div className={`${styles.sectionBorderOrange} ${className}`}>
      <SectionTitleWithBorder title={title} subtitle={subtitle} inView={inView} />
      {children}
    </div>
  );
};

export default SectionBorderOrange;
