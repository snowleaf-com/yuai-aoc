import SectionSubTitle from "./SectionSubTItle";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  inView?: boolean;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  inView = false,
}) => {
  return (
    <h2 className={`${styles.sectionTitle} effect ${inView ? "start" : ""}`}>
      {title} <SectionSubTitle subTitle={subtitle} />
    </h2>
  );
};

export default SectionTitle;
