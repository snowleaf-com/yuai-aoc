"use client";

import SectionNormal from "@/components/molecules/SectionNormal";
import styles from "@/components/organisms/TopPageSections/News/News.module.css";
import { useEffect, useState } from "react";
import Img from "@/components/atoms/Image";
import { FaInstagram, FaPen } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

interface InstagramMedia {
  media: string;
  permalink: string;
  postTime: string;
  caption?: string;
}

interface InstagramData {
  name: string;
  media: InstagramMedia[];
}

const News: React.FC = () => {
  const [instaPostData, setInstaPostData] = useState<InstagramData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  const fetchInstaPostDataDetails = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FETCH_URL2!
      );
      if (!response.ok) {
        throw new Error("Failed to fetch facility details");
      }

      const data = await response.json();
      setInstaPostData(data);
    } catch (error) {
      throw new Error("Failed to fetch facility details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstaPostDataDetails();
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      <SectionNormal title="お知らせ" subtitle="NEWS" inView={inView}>
        <div
          className={`effect ${inView ? "start" : ""} ${inView ? "d_02" : ""}`}
        >
          <Img
            src={"/img/parking_intro.png"}
            alt={"駐車場と入口のご案内"}
            className="newsImg"
          />
        </div>
        <div className={styles.customLine}></div>
        <div
          className={`${styles.insta} effect ${inView ? "start" : ""} ${
            inView ? "d_08" : ""
          }`}
        >
          {loading ? (
            <div className={styles.loadingElement}>
              <div className={styles.loader}></div>
            </div>
          ) : instaPostData && instaPostData.media.length > 0 ? (
            <ul className={styles.instaPostWrap}>
              {instaPostData.media.map((item) => (
                <li className={styles.instaPost} key={item.permalink}>
                  <span className={styles.postTime}>
                    <FaPen className="mr-1" />
                    {item.postTime}
                  </span>
                  <a
                    href={item.permalink}
                    className={styles.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.innerItem}>
                      <Img src={item.media} alt={item.caption!} className="instaImg" />
                    </div>
                    <div className={styles.innerItem2}>{item.caption}</div>
                  </a>
                </li>
              ))}
              <div className={styles.postedBy}>
                postedBy
                <a
                  href="https://www.instagram.com/yaoc.0601/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="ml-1" size="24px" />
                </a>
              </div>
            </ul>
          ) : (
            <p>投稿がありません</p>
          )}
        </div>
      </SectionNormal>
    </div>
  );
};

export default News;
