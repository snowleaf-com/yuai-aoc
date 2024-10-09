"use client";

import { useState, useRef, useEffect } from "react";
import AccordionIcon from "../atoms/AccordionIcon";
import styles from "./AccordionItem.module.css";
import parse from "html-react-parser";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isActive) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        contentRef.current.style.paddingTop = "1rem";
      } else {
        contentRef.current.style.maxHeight = "0px";
        contentRef.current.style.paddingTop = "0";
      }
    }
  }, [isActive]);

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionTitle} ${isActive ? styles.active : ""}`}
        onClick={toggleAccordion}
      >
        {title}
        <AccordionIcon isActive={isActive} />
      </button>
      <div ref={contentRef} className={styles.accordionContent}>
        <div className={styles.contentp}>{parse(content)}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
