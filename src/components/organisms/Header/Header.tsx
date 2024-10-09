"use client";

import TopLogo from "../../molecules/TopLogo";
import Nav from "../../molecules/Nav";
import ContactInfo from "../../molecules/ContactInfo";
import SocialLinks from "../../molecules/SocialLinks";
import MenuIcon from "../../atoms/MenuIcon";
import PhoneIcon from "../../atoms/PhoneIcon";
import styles from "./Header.module.css";
import { useCallback, useEffect, useState } from "react";
import ToTopButton from "@/components/molecules/ToTopButton";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const threshold = 20;
    if (scrollPosition > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${styles.header} ${isVisible ? styles.headerFixed : ""}`}
    >
      <div className={styles.bgBl}></div>
      <p className={styles.headerTxt}>沼津市西椎路のクリニック内鍼灸接骨院</p>
      <TopLogo />
      <a className={styles.telBtn} href="tel:09042159695">
        <PhoneIcon isShadow={true} />
      </a>
      <div onClick={handleMenuToggle}>
        <MenuIcon isOpen={isMenuOpen} />
      </div>
      <Nav isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      <ContactInfo />
      <SocialLinks isVisible={isVisible} />
      <ToTopButton isVisible={isVisible} />
    </header>
  );
};

export default Header;
