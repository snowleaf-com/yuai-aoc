import styles from "@/components/organisms/Details/DetailsHeader/DetailsHeader.module.css";

interface Props {
  title: string;
}

const DetailsHeader: React.FC<Props> = ({ title }) => {
  return <div className={styles.detailsHeader}>{title}</div>;
};

export default DetailsHeader;
