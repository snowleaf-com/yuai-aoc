import styles from "./SectionBorderPink.module.css";
import SectionTitleWithBorder from "../atoms/SectionTitleWithBorder";

type SectionBorderPinkProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
};

const SectionBorderPink: React.FC<SectionBorderPinkProps> = ({
  title,
  subtitle,
  children,
  className = "",
  inView = false,
}) => {
  return (
    <div className={`${styles.sectionBorderPink} ${className}`}>
      <SectionTitleWithBorder
        title={title}
        subtitle={subtitle}
        inView={inView}
      />
      {children}
    </div>
  );
};

export default SectionBorderPink;
