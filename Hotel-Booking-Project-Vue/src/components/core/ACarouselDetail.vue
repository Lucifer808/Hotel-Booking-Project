<template>
  <div class="a-carousel-container">
    <swiper
      :style="{
        '--swiper-navigation-size': '20px'
      }"
      :slidesPerView="1.5"
      :centeredSlides="true"
      :spaceBetween="20"
      :initialSlide="2"
      :parallax="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :modules="modules"
      :navigation="{

      }"
      :loop="true"
      class="mySwiper"

    >
      <swiper-slide>
        <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?animal" alt="Swiper">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?people" alt="Swiper">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?flower" alt="Swiper">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?travel" alt="Swiper">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?fruits" alt="Swiper">
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

// import required modules
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.a-carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.swiper-slide img {
  display: block;
  height: 100%;
  object-fit: cover;
}

.a-carousel-container:deep(.swiper-button-prev) {
  padding: 1.2rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-top: 2rem !important;
}

.a-carousel-container:deep(.swiper-button-next) {
  padding: 1.2rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-top: 2rem !important;
}
</style>
