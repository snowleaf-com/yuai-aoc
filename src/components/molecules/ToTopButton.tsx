"use client";

import { FaChevronUp } from "react-icons/fa6";
import styles from "@/components/molecules/ToTopButton.module.css";
interface Props {
  isVisible: boolean;
}

const ToTopButton: React.FC<Props> = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`${styles.toTop} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <a onClick={scrollToTop}>
          <FaChevronUp title="ページトップへ戻る" />
        </a>
      </div>
    </>
  );
};

export default ToTopButton;
