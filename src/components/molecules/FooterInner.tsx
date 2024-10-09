import FooterTop from './FooterTop';
import FooterMd from './FooterMd';
import FooterCopyright from './FooterCopyright';
import styles from '@/components/molecules/FooterInner.module.css';

const FooterInner: React.FC = () => {
  return (
    <div className={styles.inner}>
      <FooterTop />
      <FooterMd />
      <FooterCopyright />
    </div>
  );
};

export default FooterInner;