import Link from "next/link";
import Img from "../atoms/Image";
import Img2 from "../atoms/Image2";
import styles from "./SocialLinks.module.css";

interface SocialLinksProps {
  isVisible: boolean; // スクロール状態を受け取る
}

const SocialLinks: React.FC<SocialLinksProps> = ({ isVisible }) => (
  <ul
    className={`${styles.hSns} ${isVisible ? styles.visible : styles.hidden}`}
  >
    <li>
      <Link
        href="https://line.me/R/ti/p/@728lkset?from=page&accountId=728lkset"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          src="/img/line_tate.svg"
          alt="LINEでお問い合わせ"
          className="default-img"
        />
        <Img2
          src="/img/line_yoko.svg"
          alt="LINEでお問い合わせ"
          width="200px"
          className={`${styles.mobileImg} ${isVisible ? styles.visible : styles.hidden}`}
        />
      </Link>
    </li>
  </ul>
);

export default SocialLinks;
