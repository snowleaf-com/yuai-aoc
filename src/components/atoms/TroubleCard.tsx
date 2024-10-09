import styles from "@/components/atoms/TroubleCard.module.css";
import Link from "next/link";
import { FaSquareArrowUpRight } from "react-icons/fa6";

interface TroubleCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  special?: boolean;
}

const TroubleCard: React.FC<TroubleCardProps> = ({
  href,
  imgSrc,
  imgAlt,
  description,
  special,
}) => (
  <li className={styles.card}>
    <Link href={href} className={styles.cardLink}>
      <span className={styles.cardLinkMessage}>
        <FaSquareArrowUpRight className="mr-1" />
        VIEW MORE
      </span>
      <img src={imgSrc} alt={imgAlt} className={styles.cardImg} />
      <p className={special ? styles.specialDescription : styles.description}>
        {description}
      </p>
    </Link>
  </li>
);

export default TroubleCard;
