import styles from '@/components/atoms/Paragraph.module.css';

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <p className={styles.paragraph}>{children}</p>
);

export default Paragraph;
