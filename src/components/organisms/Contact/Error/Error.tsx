"use client";

import React from "react";
import DetailsHeader from "../../Details/DetailsHeader/DetailsHeader";
import ContentWrap from "@/components/molecules/ContentWrap";
import Pankuzu from "../../Details/Pankuzu/Pankuzu";
import styles from "@/components/organisms/Contact/Error/Error.module.css";
import Link from "next/link";
import Head from "next/head";

const Error = () => {
  const breadcrumbData = [{ url: "/contact", name: "お問い合わせ" }];

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />{" "}
      </Head>
      <DetailsHeader title="エラー" />
      <Pankuzu breadcrumbs={breadcrumbData} />
      <ContentWrap>
        <div className={styles.contact}>
          <p className={`${styles.paragraph}`}>
            メール送信エラーが発生しました。
            <br />
            <br />
            大変お手数ですが、お電話かLINEかInstagramでお問い合わせください。
            <br />
            <br />
            <Link href="https://yuai-aoc.com">ホームへ戻る</Link>
          </p>
        </div>
      </ContentWrap>
    </>
  );
};

export default Error;
