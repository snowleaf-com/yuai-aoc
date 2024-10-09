import styles from "./SectionNormal.module.css";
import SectionTitle from "../atoms/SectionTitle";
import DetailSectionTitle from "../atoms/DetailSectionTitle";

type SectionNormalProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
};

const SectionNormal: React.FC<SectionNormalProps> = ({
  title,
  subtitle,
  children,
  className = "",
  inView = false,
}) => {
  return (
    <div className={`${styles.sectionNormal} ${className}`}>
      <DetailSectionTitle title={title} subtitle={subtitle} inView={inView} />
      {children}
    </div>
  );
};

export default SectionNormal;
