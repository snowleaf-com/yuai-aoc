"use client";

// Import necessary modules from Swiper
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from "./FullScreenSwiper.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FullScreenSwiper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className={styles.background}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={false}
        speed={3000}
        fadeEffect={{ crossFade: true }}
        className={styles.swiper}
        onSlideChange={(swiper: any) => handleSlideChange(swiper)}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true
          },
        }}
      >
        <SwiperSlide className={styles.slide}>
          <motion.img
            src="/img/slide1.jpg"
            alt="Slide 1"
            initial={{ scale: 1 }}
            animate={{ scale: activeIndex === 0 ? [1, 1.2] : 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <motion.img
            src="/img/slide2.jpg"
            alt="Slide 2"
            initial={{ scale: 1 }}
            animate={{ scale: activeIndex === 1 ? [1, 1.2] : 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <motion.img
            src="/img/slide3.jpg"
            alt="Slide 3"
            initial={{ scale: 1 }}
            animate={{ scale: activeIndex === 2 ? [1, 1.2] : 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FullScreenSwiper;
