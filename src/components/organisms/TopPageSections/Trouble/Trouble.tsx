"use client";

import SectionNormal from "@/components/molecules/SectionNormal";
import TroubleCardList from "@/components/molecules/TroubleCardList";
import styles from "@/components/organisms/TopPageSections/Trouble/Trouble.module.css";
import { useInView } from "react-intersection-observer";

const Trouble = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <SectionNormal title="主な施術内容" subtitle="MENU" inView={inView}>
        <p
          className={`${styles.troubleText} effect ${inView ? "start" : ""} ${
            inView ? "d_02" : ""
          }`}
        >
          どんな症状でお困りですか？気になるメニューを押してください。
          <br />
          当院では、各種保険・労災・交通事故の対応もしております。詳しくは各ページをご覧ください。
        </p>
        <TroubleCardList inView={inView}/>
      </SectionNormal>
    </div>
  );
};

export default Trouble;
