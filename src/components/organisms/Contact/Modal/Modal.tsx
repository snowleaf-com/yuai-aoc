import styles from "@/components/organisms/Contact/Modal/Modal.module.css";
import { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: {
    name: string;
    email: string;
    message: string;
  } | null;
  isLoading: boolean;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  formData,
  isLoading,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // スクロール無効化
    } else {
      document.body.style.overflow = ""; // スクロール復活
    }

    // クリーンアップでスクロールを元に戻す
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !formData) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>この内容で送信します</h2>
        <div className={styles.inquiry}>
          <div className={styles.column2}>
            <label>お名前</label>
            <div className={styles.inputWrap}>
              <input type="text" id="name" value={formData.name} disabled />
            </div>
          </div>
          <div className={styles.column2}>
            <label>メール</label>
            <div className={styles.inputWrap}>
              <input type="email" id="email" value={formData.email} disabled />
            </div>
          </div>
          <div className={styles.column2}>
            <label>メッセージ</label>
            <div className={styles.inputWrap}>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                disabled
              ></textarea>
            </div>
          </div>
          <div className={styles.modalActions}>
            <button
              className={styles.modalButton}
              onClick={onConfirm}
              disabled={isLoading}
            >
              {isLoading ? "送信中..." : "送信する"}
            </button>
            <button
              className={`${styles.modalButton} ${styles.cancel}`}
              onClick={onClose}
              disabled={isLoading}
            >
              キャンセル
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
