"use client";

import parse from "html-react-parser";
import { useInView } from "react-intersection-observer";
import styles from "./OwnExpense.module.css";
import Img from "@/components/atoms/Image";
import DetailsHeader from "../../DetailsHeader/DetailsHeader";
import Pankuzu from "../../Pankuzu/Pankuzu";
import ContentWrap from "@/components/molecules/ContentWrap";
import SectionBorderToContactForm from "@/components/atoms/SectionBorderToContactForm";
import Contact from "@/components/organisms/TopPageSections/Contact/Contact";
import { Zen_Maru_Gothic } from "next/font/google";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["700"],
});

const OwnExpense: React.FC = () => {
  const breadcrumbData = [
    { url: "/content", name: "施術について" },
    { url: "/content/own-expense", name: "自費施術について" },
  ];
  const detailData = [
    {
      id: 1,
      imgUrl: "/img/kata1.jpg",
      title: "鍼灸",
      expense: "1,500円〜",
      detail: `首・肩・背中・腰のコリに最適！<br/>自律神経も整えリラックス、身体もポカポカ。<br/>血流も改善し免疫力もアップ！！ 運動後のケアにもいかがですか？？`,
    },
    {
      id: 2,
      imgUrl: "/img/junbi.png",
      title: "HV(ハイボルテージ)",
      expense: "近日公開",
      detail: ``,
    },
    {
      id: 3,
      imgUrl: "/img/kapping.jpg",
      title: "カッピング",
      expense: "1,000円〜",
      detail: `「たこつぼ」のようなもので患部を吸います。<br/>１〜２週間ほど丸いあとが残りますが、血流改善効果は抜群！！<br/>デトックスしてみませんか？？`,
    },
    {
      id: 4,
      imgUrl: "/img/junbi.png",
      title: "レーザー",
      expense: "近日公開",
      detail: ``,
    },
    {
      id: 5,
      imgUrl: "/img/asi2.jpg",
      title: "プチマッサージ",
      expense: "2,000円",
      detail: `20分コースのマッサージコースです。<br/>ゆっくり身体をほぐしてプチ贅沢をしてみませんか？？`,
    },
  ];

  const { ref: normalSectionRef, inView: normalSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <DetailsHeader title="自費施術について" />
      <Pankuzu breadcrumbs={breadcrumbData} />
      <ContentWrap>
        <div ref={normalSectionRef} className={styles.ownExpense}>
          <p
            className={`${styles.paragraph} effect ${
              normalSectionInView ? "start" : ""
            } ${normalSectionInView ? "d_02" : ""}`}
          >
            当院の自費施術は以下のようなメニューがございます。
            <br />
            ご予約無しでも承りますので、お気軽にお伝えください。
          </p>
          <div>
            {detailData.map((data) => (
              <SingleItem key={data.id} data={data} />
            ))}
          </div>
        </div>
        <SectionBorderToContactForm />
        <Contact />
      </ContentWrap>
    </>
  );
};

const SingleItem: React.FC<{ data: any }> = ({ data }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      className={styles.column2}
      ref={ref}
      style={{ marginBottom: "32px" }}
      key={data.id}
    >
      <div
        className={`${styles.left} ${styles.reverse2} effect ${
          inView ? "start" : ""
        } ${inView ? "d_02" : ""}`}
      >
        <Img src={data.imgUrl} alt={data.title} className="treatImg" />
      </div>
      <div
        className={`${styles.right} ${styles.reverse} effect ${
          inView ? "start" : ""
        } ${inView ? "d_04" : ""}`}
      >
        <h4 className={`${zenMaruGothic.className}`}>{data.title}</h4>
        <h4 className={styles.bold}>{data.expense}</h4>
        <span>{parse(data.detail)}</span>
      </div>
    </div>
  );
};

export default OwnExpense;
