import FooterInner from "./FooterInner";
import styles from '@/components/molecules/FooterWrap.module.css';

const FooterWrap: React.FC = () => {
  return (
    <div className={styles.footerWrap}>
      <FooterInner />
    </div>
  );
};

export default FooterWrap;
