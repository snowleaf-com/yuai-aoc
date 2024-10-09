import { FaArrowRight } from "react-icons/fa";
import styles from "@/components/atoms/Button.module.css";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  inView?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, children, inView = false }) => {
  return (
    <div
      className={`${styles.btn} effect ${
        inView ? "start d_06" : ""
      }`}
    >
      <Link href={href}>
        <FaArrowRight className={styles.arrow} />
        {children}
      </Link>
    </div>
  );
};

export default Button;
