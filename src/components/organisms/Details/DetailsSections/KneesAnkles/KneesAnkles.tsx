import DetailsTemplate from "@/components/molecules/DetailsTemplate/DetailsTemplate";

const title = "ひざ・太もも・足首の痛み";
const breadcrumbData = [
  { url: "/content", name: "施術について" },
  { url: "/content/knees-ankles", name: "ひざ・太もも・足首の痛み" },
];
const symptoms = [
  "歩いていると痛む",
  "立ち上がり、階段がつらい",
  "足首を捻挫したことがある",
  "足が疲れやすい",
  "ガクッと力が抜けてしまうことがある",
  "X脚、O脚が気になる",
  "足がつる、むくみがある",
];
const symptomImg = "/img/hiza.svg";
const causes =
  "歩く、走る、階段の上り下りなどで、膝や足首に日々大きな負担がかかってます。<br/>また、太ももの筋肉（大腿四頭筋）・すねの筋肉（前脛骨筋）・ふくらはぎの筋肉（腓腹筋、ヒラメ筋）が硬くなると、<br/>膝や足首に痛みが出やすく、それがケガに繋がることもあります。<br/>日常生活を気持ち良く送るためにも、足に少しでも痛みや不安を抱えている方はぜひ施術を受けてみてください。";
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
