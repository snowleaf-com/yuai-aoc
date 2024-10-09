import DetailsTemplate from "@/components/molecules/DetailsTemplate/DetailsTemplate";

const title = "背中・腰の痛み";
const breadcrumbData = [
  { url: "/content", name: "施術について" },
  { url: "/content/lumbar", name: "背中・腰の痛み" },
];
const symptoms = [
  "寝返りがつらい",
  "猫背・姿勢が悪いと言われている",
  "背中が張る",
  "朝起きたときに背中・腰が痛む",
  "ギックリ腰をしたことがある",
  "同じ姿勢が長時間続く",
  "マッサージをしても良くならない",
];
const symptomImg = "/img/back.svg";
const causes =
  "背中から腰にかけて、身体の中でも大きな筋肉がたくさんあります。<br/>人は姿勢を維持するためにそれらの筋肉を、常日頃から使っているため、背中や腰に強い痛みがでると日常の生活を送ることが難しくなってしまいます。<br/>そうなる前に、痛みや筋肉の硬さを取り除き、身体のメンテナンスを心掛けることが大切です。<br/>背中や腰の筋肉を正常な状態へ戻し、姿勢を正す事がストレスの軽減、疲労回復への近道かもしれません。";
const treatImgUrls = ["/img/kosi1.jpg", "/img/kosi2.jpg", "/img/kosi3.jpg"];

const Lumbar = () => {
  return (
    <DetailsTemplate
      title={title}
      breadcrumbData={breadcrumbData}
      symptoms={symptoms}
      symptomImg={symptomImg}
      symptomImgCaption={title}
      causes={causes}
      treatImgUrls={treatImgUrls}
    />
  );
};

export default Lumbar;
