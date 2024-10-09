// 'use client';

// import { useEffect, useState } from "react";
// import styles from "./IndexTop.module.css";

// const IndexTop: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(false);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <>
//       <div
//         className={`${styles.indexTop} animate__animated animate__fadeIn animate__slow`}
//       >
//         <div className={styles.topCatch}>
//           <h2 className={styles.heading}>
//             医師と連携で
//             <br />
//             幅広い施術を
//           </h2>
//           <p className={styles.text}>
//             クリニック内の接骨院だからこそ、
//             <br />
//             様々な視点でケガや痛みにアプローチ。
//             <br />
//             患者様ひとりひとりに合わせた
//             <br />
//             幅広い施術で寛解を目指します。
//           </p>
//         </div>
//         <div className={`${styles.scrolldown} ${styles.delayedShow} ${!isVisible ? styles.hidden : ""}`}>
//           <span>scroll</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IndexTop;

"use client";

import { useEffect, useState } from "react";
import styles from "./IndexTop.module.css";

const IndexTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    let scrolled = false;

    const handleScroll = () => {
      setIsVisible(false);
      scrolled = true;
      if (timeout) {
        clearTimeout(timeout); // スクロールが発生したら遅延表示のタイマーをクリアする
      }
    };

    // コンポーネントがマウントされてから2秒後に遅延表示を開始する
    timeout = setTimeout(() => {
      if (!scrolled) {
        setIsVisible(true);
      }
    }, 1500);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.indexTop} animate__animated animate__fadeIn animate__slow`}
      >
        <div className={styles.topCatch}>
          <h2 className={styles.heading}>
            医師と連携で
            <br />
            幅広い施術を
          </h2>
          <p className={styles.text}>
            クリニック内の接骨院だからこそ、
            <br />
            様々な視点でケガや痛みにアプローチ。
            <br />
            患者様ひとりひとりに合わせた
            <br />
            幅広い施術で寛解を目指します。
          </p>
        </div>
        <div
          className={`${styles.scrolldown} ${isVisible ? "" : styles.hidden}`}
        >
          <span>scroll</span>
        </div>
      </div>
    </>
  );
};

export default IndexTop;
