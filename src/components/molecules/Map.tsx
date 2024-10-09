import styles from '@/components/molecules/Map.module.css'

const Map = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6683.073796511854!2d138.81848090722266!3d35.12475236830356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019853becf1f0b1%3A0x8294a1b4a1dcb7e9!2z44KG44GG44GC44GE6Y2854G45o6l6aqo6Zmi!5e0!3m2!1sja!2sjp!4v1715024269984!5m2!1sja!2sjp"
        allowFullScreen
        width="350"
        height="350"
        loading="lazy"
        className={styles.style}
      />
    </>
  );
};

export default Map;
