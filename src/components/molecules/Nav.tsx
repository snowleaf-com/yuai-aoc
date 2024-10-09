import Link from "next/link";
import styles from "./Nav.module.css";

interface Props {
  isOpen?: boolean;
  closeMenu: () => void;
}

const menus = [
  { href: "/", text: "HOME" },
  { href: "/about", text: "当院について" },
  { href: "/content", text: "施術内容" },
  { href: "/content/accident", text: "交通事故" },
  { href: "/contact", text: "お問い合わせ" },
];

const Nav: React.FC<Props> = ({ isOpen, closeMenu }) => {
  return (
    <nav
      className={`${styles.gNavi} ${isOpen ? styles.visible : styles.hidden}`}
    >
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>
            <Link href={menu.href} onClick={closeMenu}>{menu.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
