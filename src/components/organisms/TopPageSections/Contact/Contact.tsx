"use client";

import Button from "@/components/atoms/Button";
import H3Title from "@/components/atoms/H3Title";
import Paragraph from "@/components/atoms/Paragraph";
import ContactWithFooter from "@/components/molecules/ContactWithFooter";
import ImageArea from "@/components/molecules/ImageArea";
import styles from "@/components/organisms/TopPageSections/Contact/Contact.module.css";
import { useInView } from "react-intersection-observer";

const Message = () => {
  const imagesSet = [
    {
      src: "/img/img_area_04.svg",
      alt: "電話をかける女性アイコン",
      className: "imgArea4",
      width: "35%",
    },
    {
      src: "/img/img_area_05.svg",
      alt: "スマートフォンアイコン",
      className: "imgArea5",
      width: "50%",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <ContactWithFooter
        title="ご相談・お問い合わせ"
        subtitle="CONTACT"
        inView={inView}
      >
        <div className={styles.column2}>
          <div
            className={`${styles.left} ${styles.reverse2} effect ${
              inView
                ? "start animate__animated animate__zoomIn animate__delay-1s"
                : ""
            }`}
          >
            <ImageArea images={imagesSet} />
          </div>
          <div
            className={`${styles.right} ${styles.reverse1} effect ${
              inView ? "start d_02" : ""
            }`}
          >
            <H3Title>
              不安な事や痛みについてなど、 なんでもご相談ください！
            </H3Title>
            <Paragraph>
              当院では鍼灸の施術も行います。鍼灸についてのご質問もこちらよりお寄せください。なんでもお答えします！
            </Paragraph>
            <Button href={"https://yuai-aoc.com/contact"} inView={inView}>
              ご相談・お問い合わせ
            </Button>
          </div>
        </div>
      </ContactWithFooter>
    </div>
  );
};

export default Message;
