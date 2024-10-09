"use client";

import Button from "@/components/atoms/Button";
import AccordionItem from "@/components/molecules/AccordionItem";
import SectionBorderPink from "@/components/molecules/SectionBorderPink";
import styles from "@/components/organisms/TopPageSections/Faq/Faq.module.css";
import { useInView } from "react-intersection-observer";

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      title: "はりって痛い？",
      content:
        "はりは髪の毛と同じくらいの細さのもの（0.16mm）を使用します。一瞬チクっとする事もありますが、ほぼ痛みはありません。<br />※一部ズーンとした、はり特有の『響き』が起こる事はあります。",
    },
    {
      id: 2,
      title: "お灸って熱い？",
      content:
        "お灸は皮ふの上で直接艾(もぐさ)が燃えるものではなく、お灸の周りの空気が温まる『輻射熱』でポカポカと感じます。",
    },
    {
      id: 3,
      title: "保険は使える？お金はどのくらいかかる？",
      content:
        "ぶつけた・捻った・スポーツをして痛めてしまった等の、急性期のケガが健康保険の適応となります。<br/>保険適応の場合の料金は、概ね500〜1000円前後となります。<br/>また、自費施術も行っております。よろしければ一度ご相談ください。",
    },
    {
      id: 4,
      title: "一回あたりの施術時間は？",
      content:
        "30分程度となります。症状や自費施術等で前後する事があります。<br />ご理解いただきます様、よろしくお願いします。",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <SectionBorderPink
        title="初めてご来院の方へ"
        subtitle="FAQ"
        inView={inView}
      >
        <div
          className={`${styles.faqText} effect ${inView ? "start" : ""} ${
            inView ? "d_02" : ""
          }`}
        >
          初めて鍼灸接骨院へご来院される方の不安を少しでも取り除けるよう、
          <br />
          よく寄せられるご質問をご紹介します。
          <br />
          その他、気になる事がございましたらお気軽にご相談ください。
        </div>
        <div
          className={`${styles.accordion} effect ${inView ? "start" : ""} ${
            inView ? "d_04" : ""
          }`}
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <Button href="/faq" inView={inView}>もっと見る</Button>
      </SectionBorderPink>
    </div>
  );
};

export default Faq;
