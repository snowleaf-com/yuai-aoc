import type { Metadata } from "next";
import "../globals.css";
import "animate.css";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";

export const metadata: Metadata = {
  title: "施術内容について｜ゆうあい鍼灸接骨院",
  description: "静岡県沼津市西椎路にあるゆうあい鍼灸接骨院は、鍼灸治療や接骨治療に加え、痛みの根本改善を目指すトータルケアを提供しています。経験豊富なスタッフが、患者様一人ひとりに寄り添いながら、最適な施術で健康をサポートします。",
  keywords: "沼津市, 接骨院, 鍼灸院, 静岡県, 骨折, 脱臼, ねんざ, 捻挫, 靭帯, 靭帯損傷, 肩こり, 首痛, 五十肩, ぎっくり腰, 腰痛, 膝痛, 鍼灸治療, 痛み改善, 健康促進, 整体",
  openGraph: {
    url: "https://yuai-aoc.com/content",
    type: "article",
    title: "施術内容について｜沼津市西椎路の鍼灸接骨院",
    description: "静岡県沼津市西椎路にあるゆうあい鍼灸接骨院は、鍼灸治療や接骨治療に加え、痛みの根本改善を目指すトータルケアを提供しています。経験豊富なスタッフが、患者様一人ひとりに寄り添いながら、最適な施術で健康をサポートします。",
    siteName: "ゆうあい鍼灸接骨院｜沼津市西椎路の鍼灸接骨院",
    images: [
      {
        url: "/img/yuai_ogp.png",
        alt: "ゆうあい鍼灸接骨院のOGP画像",
      },
    ],
  },
  icons: {
    icon: "/img/icon.svg", // 一般的なfavicon
    shortcut: "/img/favicon.ico", // ショートカット用アイコン（16x16）
    apple: "/img/apple-touch-icon.png", // Appleデバイス用アイコン
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
