"use client";
import styles from "@/components/molecules/FooterTop.module.css";
import Image from "@/components/atoms/Image";
import Link from "next/link";
import PhoneIcon from "../atoms/PhoneIcon";
import { Roboto } from "next/font/google";
import { useInView } from "react-intersection-observer";

// Sawarabi Minchoフォントの設定
const mincho = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const FooterTop = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className={styles.footerTop} ref={ref}>
      <div
        className={`effect ${
          inView ? "start animate__animated animate__pulse" : ""
        }`}
      >
        <Image
          src={"/img/footer-logo.svg"}
          alt={"フッターロゴ"}
          width="300px"
          className="footerLogo"
        />
      </div>
      <p className={`${styles.footerTxt} effect ${inView ? "start d_06" : ""}`}>
        沼津市西椎路164-1
        <br />
        （ゆうあいクリニック内）
      </p>
      <ul className={styles.footerTelLine}>
        <li className={styles.footerTel}>
          <Link href="tel:090-4215-9695" className={`${styles.footerPhoneFlex} effect ${inView ? "start d_08" : ""}`}>
            <PhoneIcon />
            <p className={`${styles.footerPhoneNum} ${mincho.className}`}>
              090-4215-9695
            </p>
          </Link>
        </li>
        <li className={`${styles.footerLine} effect ${inView ? "start d_10" : ""}`}>
          <Link
            href="https://line.me/R/ti/p/@728lkset?from=page&accountId=728lkset"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/img/line_pc.svg"}
              className="linePc"
              alt="LINEパソコン用"
            />
            <Image
              src={"/img/line_sp.svg"}
              className="lineSp"
              alt="LINEスマホ用"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterTop;
