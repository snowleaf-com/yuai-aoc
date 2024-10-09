"use client";

import styles from "@/components/molecules/DetailsTemplate/DetailsTemplate.module.css";
import DetailsHeader from "@/components/organisms/Details/DetailsHeader/DetailsHeader";
import Pankuzu from "@/components/organisms/Details/Pankuzu/Pankuzu";
import ContentWrap from "../ContentWrap";
import Img from "@/components/atoms/Image";
import SectionBubble from "../SectionBubble";
import SectionBubbleBottom from "@/components/atoms/SectionBubbleBottom";
import SectionBorderToContactForm from "@/components/atoms/SectionBorderToContactForm";
import Contact from "@/components/organisms/TopPageSections/Contact/Contact";
import { useInView } from "react-intersection-observer";
import parse from "html-react-parser";
import { FaRegCheckCircle } from "react-icons/fa";
import DetailSection from "../DetailSection";
import TreatCard from "@/components/atoms/TreatCard";

interface DetailsTemplateProps {
  title: string;
  breadcrumbData: Pankuzu[];
  symptoms: string[];
  symptomImg: string;
  symptomImgCaption: string;
  causes: string;
  treatImgUrls: string[];
}

const treatTitles = ["鍼灸施術", "手技施術（マッサージ）", "電気による施術"];
const treatDetails = [
  "はり・灸の施術では目的の筋肉への直接的なアプローチができます。<br />免疫力の向上、血流の改善、ホルモンバランスや自律神経を整え、心身をリラックスさせるなど、様々な効果が期待できます。<br />東洋医学・西洋医学それぞれの視点から患者様一人一人にあった最適な施術を勧めさせて頂きます。",
  "手技施術とは鍼などを使わず、手で行う施術の方法です。<br />硬くなった筋肉をほぐし、血流を改善させ、身体の痛みやコリの原因となる老廃物の排出を促します。<br />合わせてストレッチや軽度の運動・体操を行うことで、筋肉や各関節の柔軟性が向上し、疲れにくくケガをしにくい身体を目指すことができます。",
  "電気による施術とは、ケガや病気などで痛みがある・うまく動かない・硬くなってしまい柔軟性がない等の部位に、様々な種類・周波数の電気刺激を与え、症状の改善を目的としたものです。<br />ピリピリと感じるため、少し苦手な方もいらっしゃるかもしれませんが、とても効果のある施術のひとつです。",
];

const DetailsTemplate: React.FC<DetailsTemplateProps> = ({
  title,
  breadcrumbData,
  symptoms,
  symptomImg,
  symptomImgCaption,
  causes,
  treatImgUrls,
}) => {
  const { ref: normalSectionRef, inView: normalSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: normalSection2Ref, inView: normalSection2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: normalSection3Ref, inView: normalSection3InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: bubbleSectionRef, inView: bubbleSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <DetailsHeader title={title} />
      <Pankuzu breadcrumbs={breadcrumbData} />
      <ContentWrap>
        <div ref={normalSectionRef}>
          <DetailSection
            title="こんなお悩みありませんか？"
            subtitle=""
            inView={normalSectionInView}
          >
            <div className={styles.column2}>
              <div
                className={`${styles.left} ${styles.reverse2} effect ${
                  normalSectionInView ? "start" : ""
                } ${normalSectionInView ? "d_04" : ""}`}
              >
                <ul>
                  {symptoms.map((symptom, index) => (
                    <li key={index}>
                      <FaRegCheckCircle className={styles.checkMark} />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`${styles.right} ${styles.reverse} effect ${
                  normalSectionInView ? "start" : ""
                } ${normalSectionInView ? "d_02" : ""}`}
              >
                <Img
                  src={symptomImg}
                  alt={symptomImgCaption}
                  className="symptomImg"
                />
              </div>
            </div>
          </DetailSection>
        </div>
        <div ref={bubbleSectionRef}>
          <SectionBubble
            title="そのおつらい症状を根本から取り除きませんか？"
            subtitle=""
            inView={bubbleSectionInView}
          >
            <p className={`${styles.bubbleSectionParagraph} effect ${
                  bubbleSectionInView ? "start" : ""
                } ${bubbleSectionInView ? "d_02" : ""}`}>{parse(causes)}</p>
            <p className={`${styles.bubbleSectionParagraph} effect ${
                  bubbleSectionInView ? "start" : ""
                } ${bubbleSectionInView ? "d_04" : ""}`}>
              当院では鍼灸の施術やストレッチ体操、姿勢改善運動など、様々なアドバイスをさせていただいております。
              <br />
              一緒に悩みを改善しましょう！
            </p>
          </SectionBubble>
          <SectionBubbleBottom />
        </div>
        <div ref={normalSection2Ref} className={styles.detailSectionDiv}>
          <DetailSection
            title="具体的な施術"
            subtitle=""
            inView={normalSection2InView}
          >
            {treatImgUrls.map((imgUrl, index) => (
              <TreatCard
                key={index}
                index={index}
                imgUrl={imgUrl}
                treatTitle={treatTitles[index]}
                treatDetail={treatDetails[index]}
              />
            ))}
          </DetailSection>
        </div>
        <SectionBorderToContactForm />
        <Contact />
      </ContentWrap>
    </>
  );
};

export default DetailsTemplate;
