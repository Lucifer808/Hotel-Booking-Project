<template>
  <div class="a-carousel-container">
    <slot name="search-bar"></slot>
    <swiper
      :spaceBetween="0"
      :centeredSlides="true"
      :autoplay="{
          delay: 4000,
          disableOnInteraction: false
        }"
      :navigation="false"
      :modules="modules"
      :effect="'fade'"
      class="mySwiper"
    >

      <swiper-slide class="swiper-slide">
        <div class="carousel-content">
          <h1 class="carousel-content-title">M HOTEL PHU QUOC</h1>
          <p class="carousel-content-subtitle">Embrace modern design that meets unparalleled view
            of a refreshing natural scenery and the ultimate peacefulness</p>
        </div>
        <img src="@/assets/images/bn2.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/bn1.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/bn3.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/bn4.jpg">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import {EffectFade, Autoplay, Pagination, Navigation} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style>
.a-carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide {
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-content {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
  color: #fff;
  z-index: 10;
}

.carousel-content-title {
  font-family: 'raleway', sans-serif;
  font-weight: 200;
  width: 100%;
  font-size: 2.4rem;
  animation: fadeIn 1s ease-in both;
  text-align: center;
}

.carousel-content-subtitle {
  font-size: 1.2rem;
  width: 60%;
  text-align: center;
  animation: fadeIn 1s ease-in both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
