import styles from "./MenuIcon.module.css";
interface Props {
  isOpen?: boolean;
}

const MenuIcon: React.FC<Props> = ({ isOpen }) => (
  <div className={`${styles.menu_btn} ${isOpen ? styles.opened : ""}`}>
    <span className={styles.top}></span>
    <span className={styles.middle}></span>
    <span className={styles.bottom}></span>
  </div>
);

export default MenuIcon;
