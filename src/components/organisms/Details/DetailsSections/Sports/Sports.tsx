import DetailsTemplate from "@/components/molecules/DetailsTemplate/DetailsTemplate";

const title = "スポーツ障害について";
const breadcrumbData = [
  { url: "/content", name: "施術について" },
  { url: "/content/sports", name: "スポーツ障害について" },
];
const symptoms = [
  "運動やトレーニングをしていてケガをした",
  "過去に運動でケガをし、痛みがある",
  "スポーツで活躍したい・結果を残したい",
  "思うように身体が動かない、動かせない",
  "ストレッチやダウンのやり方がわからない",
];
const symptomImg = "/img/sports.svg";
const causes =
  "身体を動かすことはとても素晴らしい事です。心身の健康のためにも、連動は欠かせないとされてます。<br/>スポーツを楽しく続けていくためには、ボディメンテナンスやセルフケアがとても大切です。痛みや不安を抱えていると思うように力が発揮できません。<br/>運動を続けていきたい方、全力でスポーツに取り組む方、ケガから復帰したい方、ケガをしにくい身体作りをしたい方、ぜひ一度ご相談ください。<br/>その日の痛みは、その日のうちに！";
const treatImgUrls = ["/img/asi1.jpg", "/img/asi2.jpg", "/img/asi3.jpg"];

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
