"use client";

import SectionBorderOrange from "@/components/molecules/SectionBorderOrange";
import styles from "./Strength.module.css";
import { useInView } from "react-intersection-observer";

const Strength = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <SectionBorderOrange
        title="ゆうあい鍼灸接骨院のつよみ"
        subtitle="ABOUT US"
        inView={inView}
      >
        <h3 className={`${styles.strengthTitle} effect ${inView ? 'start' : ''} ${inView ? 'd_02' : ''}`}>マンツーマンでの施術を活かす</h3>
        <p className={`${styles.strengthText} effect ${inView ? 'start' : ''} ${inView ? 'd_04' : ''}`}>
          患者様一人一人に寄り添うことで、症状の変化を見逃さず、
          対応していきます。
          <br />
          更に<span className={styles.bold}>柔道整復師・鍼灸師</span>
          の2つの国家資格を有していることで、 捻挫や打撲、靭帯損傷といった
          <span className={styles.bold}>急性期のケガ</span>から、
          <br />
          肩こり、腰痛といった
          <span className={styles.bold}>慢性的な症状</span>
          へも、アプローチすることができます。
          <br />
          また現在、子供たちへ柔道の指導を行っている事も活かし、
          <span className={styles.bold}>スポーツでのケガへの対応</span>や、
          <span className={styles.bold}>復帰までのサポート</span>
          も行わせていただきます。
        </p>
      </SectionBorderOrange>
    </div>
  );
};

export default Strength;
