import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const hogwarts = "hogwarts-legacy";
  const cod = "call-of-duty-modern-warfare";
  const doom = "doom";

  const openGame = (data) => {
    const slug = data;
    router.push({
      pathname: "SingleGame",
      query: { slug },
    });
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.mainImage}>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation={{ nextEl: false }}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          className={styles.swiper}
          autoplay={{ delay: 4000 }}
        >
          <SwiperSlide
            className={styles.swiperSlide}
            onClick={() => openGame(hogwarts)}
          >
            <img
              src="https://www.hynerd.it/wp-content/uploads/2022/03/hogwarts-legacy.jpg"
              alt="hero image"
            />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swiperSlide}
            onClick={() => openGame(cod)}
          >
            <img
              src="https://www.kotaworld.it/images/2022/09/24/mw2-reveal-meta-share.jpg"
              alt="hero image"
            />
          </SwiperSlide>
          <SwiperSlide
            className={styles.swiperSlide}
            onClick={() => openGame(doom)}
          >
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/782330/capsule_616x353.jpg?t=1661971606"
              alt="hero image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
