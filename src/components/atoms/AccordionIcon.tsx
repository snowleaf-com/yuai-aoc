import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import styles from "@/components/atoms/AccordionIcon.module.css";

interface AccordionIconProps {
  isActive: boolean;
}

const AccordionIcon: React.FC<AccordionIconProps> = ({ isActive }) => {
  return (
    <span
      className={`${styles.icon} ${
        isActive ? styles.activeIcon : styles.nonActiveIcon
      }`}
    >
      {isActive ? <FaCircleMinus className={styles.size} /> : <FaCirclePlus className={styles.size} />}
    </span>
  );
};

export default AccordionIcon;
