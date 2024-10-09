import PhoneIcon from "../atoms/PhoneIcon";
import styles from "./ContactInfo.module.css";
import { Roboto } from "next/font/google";

// Sawarabi Minchoフォントの設定
const mincho = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const ContactInfo: React.FC = () => (
  <div className={styles.contact}>
    <a href="tel:09042159695">
      <PhoneIcon />
      <strong className={mincho.className}>090-4215-9695</strong>
    </a>
  </div>
);

export default ContactInfo;
