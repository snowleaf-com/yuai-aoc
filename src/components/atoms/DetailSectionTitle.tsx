import SectionSubTitle from "./SectionSubTItle";
import styles from "./DetailSectionTitle.module.css";

type DetailSectionTitleProps = {
  title: string;
  subtitle: string;
  inView?: boolean;
};

const SectionTitle: React.FC<DetailSectionTitleProps> = ({
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