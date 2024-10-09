import styles from "./ContentWrap.module.css";
type ContentWrapProps = {
  children: React.ReactNode;
};

const ContentWrap: React.FC<ContentWrapProps> = ({ children }) => {
  return <main className={styles.contentWrap}>{children}</main>;
};

export default ContentWrap;
