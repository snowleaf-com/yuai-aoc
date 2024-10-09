import styles from '@/components/atoms/H3Title.module.css';

interface H3TitleProps {
  children: React.ReactNode;
}

const H3Title: React.FC<H3TitleProps> = ({ children }) => (
  <h3 className={styles.h3}>{children}</h3>
);

export default H3Title;