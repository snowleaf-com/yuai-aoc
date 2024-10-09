"use client";

import ContentWrap from "@/components/molecules/ContentWrap";
import DetailsHeader from "@/components/organisms/Details/DetailsHeader/DetailsHeader";
import Pankuzu from "@/components/organisms/Details/Pankuzu/Pankuzu";
import styles from "@/components/organisms/Contact/Contact.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Modal from "./Modal/Modal";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  message: string;
  submit: any;
};

export default function Contact() {
  const breadcrumbData = [{ url: "/contact", name: "お問い合わせ" }];

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Inputs | null>(null);

  const handleConfirmSubmit = (data: Inputs) => {
    // フォームデータを保存し、モーダルを表示
    setFormData(data);
    setIsModalOpen(true);
  };

  const onSubmit: SubmitHandler<Inputs> = async () => {
    if (!formData) return;

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_FETCH_URL!,
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/contact/complete");
    } catch (error) {
      router.push("/contact/error");
    } finally {
      setIsModalOpen(false); // モーダルを閉じる
    }
  };

  return (
    <>
      <DetailsHeader title="お問い合わせ" />
      <Pankuzu breadcrumbs={breadcrumbData} />
      <ContentWrap>
        <div className={styles.contact}>
          <p className={`${styles.paragraph}`}>
            お急ぎの方はお手数おかけいたしますが、
            <a href="tel:09042159695">090-4215-9695</a>までお電話ください。
            <br />
            ２日経過しても返信がない場合も恐れ入りますが、上記電話番号までお電話ください。
          </p>
          <div className={styles.inquiry_wrap}>
            <div className={styles.inquiry}>
              <div className={styles.inner}>
                <form id="mailForm" onSubmit={handleSubmit(handleConfirmSubmit)}>
                  <div className={styles.column2}>
                    <label htmlFor="name">
                      <span className={styles.required}>必須</span>
                      お名前
                    </label>
                    <div className={styles.inputWrap}>
                      <input
                        type="text"
                        id="name"
                        placeholder="お名前"
                        {...register("name", {
                          required: "お名前を入力してください。",
                          maxLength: {
                            value: 20,
                            message: "20文字以下で入力してください。",
                          },
                        })}
                      />
                      {errors.name?.message && (
                        <p className={styles.errorMessage}>
                          {errors.name?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles.column2}>
                    <label htmlFor="email">
                      <span className={styles.required}>必須</span>
                      メール
                    </label>
                    <div className={styles.inputWrap}>
                      <input
                        type="email"
                        id="email"
                        placeholder="メールアドレス"
                        {...register("email", {
                          required: "メールアドレスを入力してください。",
                          maxLength: {
                            value: 50,
                            message: "50文字以下で入力してください。",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                            message: "正しいメールアドレスを入力してください。",
                          },
                        })}
                      />
                      {errors.email?.message && (
                        <p className={styles.errorMessage}>
                          {errors.email?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles.column2}>
                    <label htmlFor="message">
                      <span className={styles.required}>必須</span>
                      メッセージ
                    </label>
                    <div className={styles.inputWrap}>
                      <textarea
                        id="message"
                        rows={10}
                        placeholder="お問い合わせ内容"
                        {...register("message", {
                          required: "メッセージを入力してください。",
                          maxLength: {
                            value: 1000,
                            message: "1000文字以下で入力してください。",
                          },
                        })}
                      ></textarea>
                      {errors.message?.message && (
                        <p className={styles.errorMessage}>
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles.column2}>
                    <input
                      type="submit"
                      value="内容を確認する"
                      id="sendBtn"
                      name="sendBtn"
                    />
                  </div>
                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleSubmit(onSubmit)}
                    formData={formData}
                    isLoading={isSubmitting}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </ContentWrap>
    </>
  );
}
