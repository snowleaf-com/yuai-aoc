"use client";

import ContentWrap from "@/components/molecules/ContentWrap";
import styles from "@/components/organisms/Question/Question.module.css";
import DetailsHeader from "../Details/DetailsHeader/DetailsHeader";
import Pankuzu from "../Details/Pankuzu/Pankuzu";
import Contact from "../TopPageSections/Contact/Contact";
import SectionBorderToContactForm from "@/components/atoms/SectionBorderToContactForm";
import { useInView } from "react-intersection-observer";
import AccordionItem from "@/components/molecules/AccordionItem";

const Question = () => {
  const breadcrumbData = [{ url: "/faq", name: "よくある質問" }];
  const faqItems = [
    {
      id: 1,
      title: "はりって痛い？",
      content:
        "はりは髪の毛と同じくらいの細さのもの（0.16mm）を使用します。<br/>一瞬チクっとする事もありますが、ほぼ痛みはありません。<br/>※一部ズーンとした、はり特有の【響き】が起こる事はあります。",
    },
    {
      id: 2,
      title: "お灸って熱い？",
      content:
        "お灸は皮ふの上で直接艾(もぐさ)が燃えるものではなく、お灸の周りの空気が温まる【輻射熱】でポカポカと感じます。",
    },
    {
      id: 3,
      title: "保険は使える？お金はどのくらいかかる？",
      content: `ぶつけた・捻った・スポーツをして痛めてしまった等、ケガ(急性期)に対し健康保険が適応となります。一回の料金は概ね500〜1000円前後となります(自費施術別)。よろしければ一度ご相談ください。`,
    },
    {
      id: 4,
      title: "一回あたりの施術時間は？",
      content: `概ね30分程度となります。症状や自費施術等で前後する事があります。<br/>ご理解いただきますようよろしくお願いします。`,
    },
    {
      id: 5,
      title: "どんな服装でいけばいい？",
      content: `どんな服装でも構いません！！<br/>が、ゆったりとしたTシャツやスウェット・ジャージなどリラックスできる服装でご来院いただけるとよりリラックス効果を得られます。`,
    },
    {
      id: 6,
      title: "妊娠中でも大丈夫？",
      content: `一般的には妊娠16週目以降の安定期をすぎてから8カ月目までを目安に施術を行うことが可能です。<br/>16週目以前の妊娠初期や臨月の期間はリスクが高いため、避けるようにしてください。<br/>当院も腰痛やストレス緩和などを目的とした施術をおこなっています。<br/>※施術を希望される際は事前にかかりつけの医師にご相談ください。`,
    },
    {
      id: 7,
      title: "何回通えばいい？",
      content: `受傷直後は筋肉に硬さや炎症があるため、なるべく高頻度のご来院をお勧めします。<br/>痛みは少し楽になったがまだ痛み違和感がある場合は毎日〜週数回のご来院をお勧めします。<br/>また、「日々のメンテナンスを行いたい」、「痛くならない様な身体作りをしたい」等の方々にも各種メニューorプログラムを用意しています。<br/>ご気軽にご相談ください。`,
    },
  ];
  const { ref: normalSection2Ref, inView: normalSection2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <DetailsHeader title="よくある質問" />
      <Pankuzu breadcrumbs={breadcrumbData} />
      <ContentWrap>
        <div className={styles.faq} ref={normalSection2Ref}>
          <p className={`${styles.paragraph}`}>
            よく寄せられるご質問を掲載します。
            <br />
            その他、気になる事がございましたらお気軽にご相談ください。
          </p>
        </div>
        <div
          className={`${styles.accordion} effect ${
            normalSection2InView ? "start" : ""
          } ${normalSection2InView ? "d_04" : ""}`}
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <SectionBorderToContactForm />
        <Contact />
      </ContentWrap>
    </>
  );
};

export default Question;
