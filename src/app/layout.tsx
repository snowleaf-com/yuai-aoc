import type { Metadata } from "next";
import "./globals.css";
import { Zen_Maru_Gothic } from "next/font/google";
import "animate.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "ゆうあい鍼灸接骨院｜沼津市西椎路の鍼灸接骨院",
  description:
    "静岡県沼津市西椎路に位置するゆうあい鍼灸接骨院は、幅広い施術を通じて痛みを改善し、健康を促進します。経験豊富な専門家が、鍼灸・接骨治療であなたの健康をサポートします。",
  keywords:
    "沼津市, 接骨院, 鍼灸院, 静岡県, 骨折, 脱臼, ねんざ, 捻挫, 靭帯, 靭帯損傷, 肩こり, 首痛, 五十肩, ぎっくり腰, 腰痛, 膝痛, 鍼灸治療, 痛み改善, 健康促進, 整体",
  openGraph: {
    url: "https://yuai-aoc.com",
    type: "website",
    title: "ゆうあい鍼灸接骨院｜沼津市西椎路の鍼灸接骨院",
    description:
      "静岡県沼津市西椎路に位置するゆうあい鍼灸接骨院は、幅広い施術を通じて痛みを改善し、健康を促進します。経験豊富な専門家が、鍼灸・接骨治療であなたの健康をサポートします。",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleAnalytics gaId="G-MH2EVDQFX6" />
      <body
        className={`${zenMaruGothic.className} animate__animated animate__fadeIn`}
      >
        {children}
      </body>
    </html>
  );
}
