<template>
  <swiper
    :loop="true"
    :slidesPerView="1"
    :spaceBetween="5"
    :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg"></swiper-slide>
    <swiper-slide><img src="../../assets/images/Deluxe-twin-Suite-City-View-with-Balcony-7-scaled.jpg"></swiper-slide>
    <swiper-slide><img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled%20(1).jpg"></swiper-slide>
    <swiper-slide><img src="../../assets/images/Ocean-Eyes-Double-Suite-4-1536x1024.jpg"></swiper-slide>
    <swiper-slide><img src="../../assets/images/Ocean-Eyes-Double-Suite-5-scaled.jpg"></swiper-slide>
    <swiper-slide><img src="../../assets/images/La-Petite-Room-with-window-1-scaled.jpg"></swiper-slide>
    <swiper-slide><img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg"></swiper-slide>
    <swiper-slide><img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg"></swiper-slide>
    <swiper-slide><img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg"></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import {Pagination} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 400px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  object-fit: cover;
}

</style>
