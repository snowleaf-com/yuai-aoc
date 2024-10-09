// SectionTitleコンポーネントのマージントップ無し

import SectionSubTitle from "./SectionSubTItle";
import styles from "./SectionTitleWithBorder.module.css";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  inView?: boolean;
};

const SectionTitleWithBorder: React.FC<SectionTitleProps> = ({
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

export default SectionTitleWithBorder;
