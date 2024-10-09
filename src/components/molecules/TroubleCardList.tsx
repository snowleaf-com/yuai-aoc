import TroubleCard from "../atoms/TroubleCard";
import styles from "@/components/molecules/TroubleCardList.module.css";

type Props = {
  inView?: boolean;
};

const cardsData = [
  {
    href: "/content/shoulder",
    imgSrc: "/img/kata.svg",
    imgAlt: "首の痛み・肩こり",
    description: "首の痛み・肩こり",
  },
  {
    href: "/content/lumbar",
    imgSrc: "/img/back.svg",
    imgAlt: "背中・腰の痛み",
    description: "背中・腰の痛み",
  },
  {
    href: "/content/knees-ankles",
    imgSrc: "/img/hiza.svg",
    imgAlt: "ひざ・太もも・足首の痛み",
    description: "ひざ・太もも・足首の痛み",
    special: true,
  },
  {
    href: "/content/sports",
    imgSrc: "/img/sports.svg",
    imgAlt: "スポーツ障害",
    description: "スポーツ障害",
  },
  {
    href: "/content/accident",
    imgSrc: "/img/jiko.svg",
    imgAlt: "交通事故・労災",
    description: "交通事故・労災",
  },
  {
    href: "/content/own-expense",
    imgSrc: "/img/jihi.svg",
    imgAlt: "自費施術",
    description: "自費施術",
  },
];

const TroubleCardList: React.FC<Props> = ({ inView = false }) => (
  <ul
    className={`${styles.cardLists} effect ${inView ? "start" : ""} ${
      inView ? "d_04" : ""
    }`}
  >
    {cardsData.map((card, index) => (
      <TroubleCard
        key={index}
        href={card.href}
        imgSrc={card.imgSrc}
        imgAlt={card.imgAlt}
        description={card.description}
        special={card.special}
      />
    ))}
  </ul>
);

export default TroubleCardList;
