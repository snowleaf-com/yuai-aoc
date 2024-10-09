import styles from "@/components/molecules/FooterMd.module.css";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import Map from "./Map";

const mincho = Roboto({
  weight: "500",
  subsets: ["latin"],
});
const links = [
  { href: "/about", text: "当院について" },
  { href: "/content", text: "施術内容" },
  { href: "/content/shoulder", text: "首の痛み・肩こり", indented: true },
  { href: "/content/lumbar", text: "背中・腰の痛み", indented: true },
  {
    href: "/content/knees-ankles",
    text: "ひざ・太もも・足首の痛み",
    indented: true,
  },
  { href: "/content/sports", text: "スポーツ障害", indented: true },
  { href: "/content/accident", text: "交通事故・労災", indented: true },
  {
    href: "/content/own-expense",
    text: "自費施術について",
    indented: true,
  },
  { href: "/faq", text: "よくあるご質問" },
  { href: "/contact", text: "お問い合わせ" },
];

const FooterMd = () => {
  return (
    <div className={styles.footerMd}>
      <div className={styles.footerMdLeft}>
        <div className={styles.footerMdSchedule}>
          <table className={styles.scheduleTable}>
            <tbody>
              <tr>
                <th>受付時間</th>
                <th>月</th>
                <th>火</th>
                <th>水</th>
                <th>木</th>
                <th>金</th>
                <th>土</th>
                <th className={styles.holiday}>日祝</th>
              </tr>
              <tr>
                <td className={mincho.className}>08:00〜11:30</td>
                <td className={styles.txtMain}>●</td>
                <td className={styles.txtMain}>●</td>
                <td className={styles.txtMain}>●</td>
                <td className={styles.txtMain}>●</td>
                <td className={styles.txtMain}>●</td>
                <td className={styles.txtMain}>◎</td>
                <td>-</td>
              </tr>
              <tr>
                <td className={mincho.className}>14:30〜19:30</td>
                <td className={styles.txtMain}>●</td>
                <td className={styles.txtMain}>●</td>
                <td className={styles.txtMain}>●</td>
                <td>-</td>
                <td className={styles.txtMain}>●</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.scheduleIntroduce}>
            <span className={styles.txtMain}>※</span>お休み：日祝
            <span className={styles.txtMain} style={{ marginLeft: "25px" }}>
              ◎
            </span>
            土曜日は12:30まで
          </p>
        </div>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li
                key={index}
                className={link.indented ? styles.indentedList : ""}
              >
                <Link href={link.href}>
                  <FaChevronRight
                    style={{ display: "inline", marginRight: "10px" }}
                  />
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div style={{height:'100%'}}>
        <Map />
      </div>
    </div>
  );
};

export default FooterMd;
