import styles from "./SectionSubTitle.module.css";

interface SectionSubTitle {
  subTitle: string;
}

const SectionSubTitle: React.FC<SectionSubTitle> = ({ subTitle }) => {
  return <div className={styles.sectionSubTitle}>{subTitle}</div>;
};

export default SectionSubTitle;