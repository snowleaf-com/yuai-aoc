import DetailsTemplate from "@/components/molecules/DetailsTemplate/DetailsTemplate";

const title = "首の痛み・肩こり";
const breadcrumbData = [
  { url: "/content", name: "施術について" },
  { url: "/content/shoulder", name: "首の痛み・肩こり" },
];
const symptoms = [
  "首や肩が痛い、重だるい",
  "肩こりを感じやすい",
  "頭痛がする",
  "肩が動かしにくい",
  "同じ姿勢が長時間続く",
  "マッサージをしても良くならない",
  "寝違えてしまった",
];
const symptomImg = "/img/kata.svg";
const causes =
  "首や肩の痛みの原因の多くは、血行が悪く、節肉が縮んでしまい「コリ」になっていることがあげられます。<br />特に首や肩は頭を支えているため、常に負担がかかっています。<br />痛みをそのままにしておくと頭痛などにも繋がってしまうため、おかしいなと感じたら、なるべく早い段階での施術がオススメです。";
const treatImgUrls = ["/img/kata1.jpg", "/img/kata2.jpg", "/img/kata3.jpg"];

const Shoulder = () => {
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

export default Shoulder;
