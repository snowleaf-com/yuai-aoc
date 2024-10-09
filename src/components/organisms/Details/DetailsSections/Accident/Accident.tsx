"use client";

import SectionBorderToContactForm from "@/components/atoms/SectionBorderToContactForm";
import ContentWrap from "@/components/molecules/ContentWrap";
import React from "react";
import Contact from "@/components/organisms/TopPageSections/Contact/Contact";
import DetailsHeader from "@/components/organisms/Details/DetailsHeader/DetailsHeader";
import Pankuzu from "@/components/organisms/Details/Pankuzu/Pankuzu";
import styles from "@/components/organisms/Details/DetailsSections/Accident/Accident.module.css";
import { useInView } from "react-intersection-observer";
import Timeline from "@/components/molecules/Timeline";
import DetailSection from "@/components/molecules/DetailSection";
import SectionBubble from "@/components/molecules/SectionBubble";
import SectionBubbleBottom from "@/components/atoms/SectionBubbleBottom";
import AccordionItem from "@/components/molecules/AccordionItem";

const Accident = () => {
  const breadcrumbData = [
    { url: "/content", name: "施術について" },
    { url: "/content/accident", name: "交通事故・労災" },
  ];
  const timelineData = [
    {
      number: 1,
      title: "警察に連絡",
      description: `事故に遭ったら、必ず警察に届けて事故証明をいただいてください。<br/>事故証明が無いと自賠責保険が使えません。示談に応じてしまうと後々問題が生じやすいので、必ず警察に連絡して事故証明をいただきましょう。`,
    },
    {
      number: 2,
      title: "保険会社に連絡",
      description: `ご自身が加入されている保険会社に連絡をしましょう。`,
    },
    {
      number: 3,
      title: "当院に連絡",
      description: `<a href="tel:09042159695">090-4215-9695</a>までご連絡ください！その後の流れをご説明いたします。`,
    },
    {
      number: 4,
      title: "ゆうあいクリニックにて受診",
      description: `ゆうあいクリニック にて診察を受けて頂く事で、後の当院での施術がスムーズです。<br/>当院はゆうあいクリニック内にあり、久保医師と連携を取っておりますので、詳しい症状を把握し、アプローチすることができます。`,
    },
    {
      number: 5,
      title: "当院にて施術",
      description: `保険会社より当院に交通事故の施術依頼の連絡が入り、施術開始となります。<br/>自賠責保険が使えますので、窓口料金の患者様負担はありません。`,
    },
  ];
  const faqItems = [
    {
      id: 1,
      title: "費用はかかる？",
      content: "自賠責保険が使えますので、窓口料金の患者様負担はありません。",
    },
    {
      id: 2,
      title: "治るまでの期間は？",
      content:
        "程度によりますので、一概に言えませんが、基本的には症状が改善・治癒するまで施術をされることを勧めております。 むち打ち症（頸部捻挫）は３ヶ月〜６ヶ月は見たほうがいいと思います。",
    },
    {
      id: 3,
      title: "接骨院ではなく、病院へ行けと保険会社に言われた",
      content: `症状を改善するためにどの医療機関にかかるかは、ご本人の自由です。保険会社が決めることではありません。<br/><br/>当院はゆうあいクリニック内にあるため、久保医師の受診をなされて、当院で施術が必要な場合は紹介を頂きます。<br/>症状も詳細に把握することが可能です。また、医師の診察が必要になった際にはすぐに診察を受けていただく事ができますので安心して当院へ通院なさってください。`,
    },
  ];
  const { ref: normalSectionRef, inView: normalSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: orangeSectionRef, inView: orangeSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: normalSection2Ref, inView: normalSection2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <DetailsHeader title="交通事故・労災" />
      <Pankuzu breadcrumbs={breadcrumbData} />
      <ContentWrap>
        <div ref={normalSectionRef}>
          <DetailSection
            title="交通事故・労災の際は当院へ"
            subtitle=""
            inView={normalSectionInView}
          >
            <p
              className={`${styles.detailsText} effect ${
                normalSectionInView ? "start" : ""
              } ${normalSectionInView ? "d_02" : ""}`}
            >
              ゆうあいクリニックの久保医師と連携しておりますので、他院に比べ、手間が少なく済みます。
              <br />
              <a href="tel:09042159695">090-4215-9695</a>
              までご連絡いただければ、すぐに対応させて頂きます。
            </p>
            <p
              className={`${styles.detailsText} effect ${
                normalSectionInView ? "start" : ""
              } ${normalSectionInView ? "d_04" : ""}`}
            >
              尚、費用は一切かかりません。症状が良くなるまで何度でも通院して頂けます！
            </p>
          </DetailSection>
        </div>
        <div ref={orangeSectionRef}>
          <SectionBubble
            title="事故後の流れ"
            subtitle=""
            inView={orangeSectionInView}
          >
            <Timeline datas={timelineData} />
          </SectionBubble>
          <SectionBubbleBottom />
        </div>
        <div ref={normalSection2Ref}>
          <DetailSection
            title="よくあるご質問"
            subtitle=""
            inView={normalSection2InView}
          >
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
          </DetailSection>
        </div>
        <SectionBorderToContactForm />
        <Contact />
      </ContentWrap>
    </>
  );
};

export default Accident;
