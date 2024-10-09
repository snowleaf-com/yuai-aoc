"use client";
import H3Title from "@/components/atoms/H3Title";
import Paragraph from "@/components/atoms/Paragraph";
import ImageArea from "@/components/molecules/ImageArea";
import SectionNormal from "@/components/molecules/SectionNormal";
import styles from "@/components/organisms/TopPageSections/Message/Message.module.css";
import { useInView } from "react-intersection-observer";

const Message = () => {
  const imagesSet = [
    {
      src: "/img/img_area_01.svg",
      alt: "病院アイコン",
      className: "imgArea1",
      width: "28%",
    },
    {
      src: "/img/img_area_02.svg",
      alt: "院長アイコン",
      className: "imgArea2",
      width: "45%",
    },
    {
      src: "/img/img_area_03.svg",
      alt: "ヒアリングアイコン",
      className: "imgArea3",
      width: "30%",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <SectionNormal title="院長からご挨拶" subtitle="MESSAGE" inView={inView}>
        <div className={styles.column2}>
          <div
            className={`${styles.left} effect ${inView ? "start d_02" : ""}`}
          >
            <H3Title>『新たな医療のかたち』</H3Title>
            <Paragraph>
              ゆうあい鍼灸接骨院 院長の杉山です。
              <br />
              ホームページをご覧いただきありがとうございます。
            </Paragraph>
            <Paragraph>
              当院は、ゆうあいクリニック内に開院し、ゆうあいクリニック
              久保医師との連携を取ることにより、 患者様一人一人に合わせた
              <span className="bold">『新たな医療のかたち』</span>
              を提供することが可能となりました。
              <br />
              通常の接骨院よりも、より詳細に症状の把握をでき、症状に対して適切なアプローチをすることができます。
            </Paragraph>
            <Paragraph>
              私は、幼少期より柔道の稽古に励んできました。
              <br />
              怪我に泣かされることも多く、私自身も久保医師をはじめ鍼灸接骨院にお世話になりました。
              今はプレイヤーでもあり指導者でもある立場から、怪我をして悩んでいる人、
              <span className="bold">全ての頑張っている方々のサポート</span>
              をしていきたいと考えています。
              <br />
              みなさまにすてきな笑顔を届けられる様な、施術をしていきます。当院にてお待ちしております。
            </Paragraph>
          </div>
          <div
            className={`${styles.right} effect ${inView ? " start animate__animated animate__zoomIn animate__delay-1s" : ""}`}
          >
            <ImageArea images={imagesSet} />
          </div>
        </div>
      </SectionNormal>
    </div>
  );
};

export default Message;
