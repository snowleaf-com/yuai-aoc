import FooterWrap from "../../molecules/FooterWrap";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {


  return (
    <footer className={styles.footer}>
      <FooterWrap />
    </footer>
  );
};

export default Footer;
