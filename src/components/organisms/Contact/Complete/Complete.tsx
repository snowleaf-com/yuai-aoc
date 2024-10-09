"use client";

import React from "react";
import DetailsHeader from "../../Details/DetailsHeader/DetailsHeader";
import ContentWrap from "@/components/molecules/ContentWrap";
import Pankuzu from "../../Details/Pankuzu/Pankuzu";
import styles from "@/components/organisms/Contact/Complete/Complete.module.css";
import Link from "next/link";
import Head from "next/head";

const Complete = () => {
  const breadcrumbData = [{ url: "/contact", name: "お問い合わせ" }];

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />{" "}
      </Head>
      <DetailsHeader title="送信完了" />
      <Pankuzu breadcrumbs={breadcrumbData} />
      <ContentWrap>
        <div className={styles.contact}>
          <p className={`${styles.paragraph}`}>
            お問い合わせありがとうございました。
            <br />
            <br />
            確認メールを送付させて頂きました。
            <br />
            届いていない場合は迷惑メールフォルダに振り分けられている可能性がありますので、お手数をおかけますがご覧ください。
            <br />
            <br />
            <Link href="https://yuai-aoc.com">ホームへ戻る</Link>
          </p>
        </div>
      </ContentWrap>
    </>
  );
};

export default Complete;
