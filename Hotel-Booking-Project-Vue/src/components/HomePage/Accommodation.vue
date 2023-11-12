<template>
  <div class="accommodation-container">
    <div class="accommodation-interview">
      <div class="accommodation-interview-content">
        <h2 class="accommodation-interview-content-title">M HOTEL PHU QUOC</h2>
        <p class="accommodation-interview-content-subtitle">M Hotel Phu Quoc shares the same aesthetic and aura as M
          Hotel Saigon where guests fully embrace modern
          design that meets unparalleled view of a refreshing natural scenery and the ultimate peacefulness.</p>
        <p class="accommodation-interview-content-subtitle">The property is strategically located a 12 minutes car
          journey from Phu Quoc International Airport, and
          conveniently accessible from Phu Quoc’s famous Night Market in just a few steps away (1 minute walk).</p>
      </div>
      <img class="accommodation-interview-image" src="../../assets/images/Ocean-Eyes-Double-Suite-4-1536x1024.jpg"/>
    </div>
    <div class="accommodation-wrapper">
      <h2 class="accommodation-title">
        ACCOMMODATIONS
      </h2>
      <p style="color: rgba(144,143,143,0.64)">Flawlessly designed and outlined with a pleasant relaxing sense, M Hotel
        Phu Quoc
        introduces guests with
        endless view of the entire surrounding
      </p>
    </div>
    <div class="accommodation-parallax-wrapper">
      <swiper
        :style="{
          '--swiper-navigation-color': '#264B5DFF',
          '--swiper-pagination-color': '#264B5DFF',
        }"
        :speed="600"
        :parallax="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        space-between="30"
      >
        <div
          slot="container-start"
          class="parallax-bg"
          data-swiper-parallax="-23%"
        >
        </div>
        <swiper-slide>
          <img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg">
          <div class="content">
            <div class="title" data-swiper-parallax="-300">La Petite</div>
            <div class="text" data-swiper-parallax="-100">
              <p>
                M HOTEL PHU QUOC More information Cozy and comfort best describes our La Petite room. Our La Petite
                offer the same generous furniture and decor of our other rooms along with space-saving amenities that
                make you feel comfortable without infringing on the room. The La Petite rooms all have double beds for
                an excellent night’s […]
              </p>
              <div><a class="click-btn btn-style903" href="#">Tìm hiểu thêm</a></div>
            </div>
          </div>
        </swiper-slide
        >
        <swiper-slide>
          <img src="../../assets/images/Ocean-Eyes-Double-Suite-4-1536x1024.jpg">
          <div class="content">
            <div class="title" data-swiper-parallax="-300">La Petite</div>
            <div class="text" data-swiper-parallax="-100">
              <p>
                M HOTEL PHU QUOC More information Cozy and comfort best describes our La Petite room. Our La Petite
                offer the same generous furniture and decor of our other rooms along with space-saving amenities that
                make you feel comfortable without infringing on the room. The La Petite rooms all have double beds for
                an excellent night’s […]
              </p>
              <div>
                <router-link class="click-btn btn-style903" to="/room-detail">Tìm hiểu thêm</router-link>
              </div>
            </div>
          </div>
        </swiper-slide
        >
        <swiper-slide>
          <img src="../../assets/images/Ocean-Eyes-Double-Suite-5-scaled.jpg">
          <div class="content">
            <div class="title" data-swiper-parallax="-300">La Petite</div>
            <div class="text" data-swiper-parallax="-100">
              <p>
                M HOTEL PHU QUOC More information Cozy and comfort best describes our La Petite room. Our La Petite
                offer the same generous furniture and decor of our other rooms along with space-saving amenities that
                make you feel comfortable without infringing on the room. The La Petite rooms all have double beds for
                an excellent night’s […]
              </p>
              <div><a class="click-btn btn-style903" href="#">Tìm hiểu thêm</a></div>
            </div>
          </div>
        </swiper-slide
        >
      </swiper>
    </div>
    <div class="accommodation-wrapper">
      <h2 class="accommodation-title">
        FOOD & BEVERAGE
      </h2>
      <p style="color: rgba(144,143,143,0.64)">We have prepared special offer recommendations to make your stay more
        enjoyable
      </p>
      <div class="accommodation-interview">
        <div class="accommodation-interview-content">
          <h2 class="accommodation-interview-content-title">M Sunset</h2>
          <p class="accommodation-interview-content-subtitle">M Sunset Restaurant creates culinary experiences and
            events tailored for each branch of life. Refinement, taste and love for details: we will spoil you with our
            delicious & refined local and international cuisine and the perfect service that you can enjoy alongside
            natural beauty and breathtaking views.With the open view towards Phu Quoc's pristine blue ocean, any type of
            occasion is marked for success.</p>
          <p class="accommodation-interview-content-subtitle">Location: Ground Floor
            Opening Hours: 6:30 AM - 09:00 PM</p>
        </div>
        <img class="accommodation-interview-image" src="../../assets/images/Restaurant_16-scaled.jpg"/>
      </div>
    </div>
    <div class="accommodation-view">
      <div class="accommodation-view-content-top">
        <h2>A VIEW TO LIVE FOR</h2>
        <span>In our unique and exceptionally decorated infinity pool, you will surely achieve true harmony of beauty and serenity, with the help of a panoramic view of Phu Quoc’s iconic sunsets and sea view</span>
      </div>
      <div class="accommodation-view-content-bottom">
        <h2>INDULGE IN</h2>
        <span>A space where we can step back and reconnect with nature and surround ourselves with the water element from which all life springs. To breathe clean air and feel the revitalising force of water.</span>
      </div>
    </div>
    <div class="accommodation-wrapper">
      <h2 class="accommodation-title">
        OUR FACILITIES
      </h2>
      <p style="color: rgba(144,143,143,0.64)">We have prepared special offer recommendations to make your stay more
        enjoyable
      </p>
      <div class="accommodation-interview-facilities-wrapper">
        <div class="accommodation-interview-facilities">
          <img class="accommodation-interview-image w-100"
               src="../../assets/images/delaney-van-udE7Kh7QHbM-unsplash-1536x1024.jpg"/>
          <p class="accommodation-interview-content-subtitle"
          >Our extensive menu
            of spa services and
            therapies offers
            something for every guest. Spa service advisors will be pleased to help you select from our classic
            Traditional Vietnamese Massage to our popular Thai Massage curated by our professional masseuses.</p>
        </div>
        <div class="accommodation-interview-facilities">
          <img class="accommodation-interview-image w-100" src="../../assets/images/99_L7698.jpg"/>
          <p class="accommodation-interview-content-subtitle"
          >Our extensive menu
            of spa services and
            therapies offers
            something for every guest. Spa service advisors will be pleased to help you select from our classic
            Traditional Vietnamese Massage to our popular Thai Massage curated by our professional masseuses.</p>
        </div>
      </div>
    </div>
    <div class="accommodation-wrapper">
      <h2 class="accommodation-title">
        HOTEL GALLERY & SPECIAL OFFER
      </h2>
      <p style="color: rgba(144,143,143,0.64)">We have prepared special offer recommendations to make your stay more
        enjoyable
      </p>
    </div>
    <div class="wrapper">
      <div class="grid-box element1">
        <img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg">
      </div>
      <div class="grid-box element2">
        <img src="../../assets/images/Deluxe-twin-Suite-City-View-with-Balcony-7-scaled.jpg">
      </div>
      <div class="grid-box element3">
        <img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled%20(1).jpg">
      </div>
      <div class="grid-box element4">
        <img src="../../assets/images/Ocean-Eyes-Double-Suite-5-scaled.jpg">
      </div>
      <div class="grid-box element5">
        <img src="../../assets/images/Ocean-Eyes-Double-Suite-4-1536x1024.jpg">
      </div>
      <div class="grid-box element6">
        <img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg">
      </div>
      <div class="grid-box element7">
        <img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg">
      </div>
      <div class="grid-box element8">
        <img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg">
      </div>
      <div class="grid-box element9">
        <img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg">
      </div>
      <div class="grid-box element10">
        <img src="../../assets/images/Deluxe-Double-Suite-with-Balcony-4-scaled.jpg">
      </div>
    </div>
    <div class="accommodation-wrapper">
      <h4 class="accommodation-title">
        Follow us on instagram
      </h4>
      <a-social-carousel/>
    </div>
    <div class="accommodation-info-wrapper">
      <a-info-card/>
    </div>
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
import {Parallax, Pagination, Navigation} from 'swiper/modules';
import ASocialCarousel from "@/components/core/ASocialCarousel.vue";
import AInfoCard from "@/components/core/AInfoCard.vue";

export default {
  components: {
    AInfoCard,
    ASocialCarousel,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Parallax, Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.accommodation-container {
  height: auto;
  width: auto;
}

.accommodation-interview {
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
}

.accommodation-interview-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem;

  .accommodation-interview-content-title {
    font-weight: 500;
    margin: 2rem 0;
    font-size: 3rem;
  }

  .accommodation-interview-content-subtitle {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
  }
}

.accommodation-interview-image {
  height: 50%;
  width: 50%;
}

.accommodation-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  .accommodation-title {
    font-weight: 500;
    margin-top: 2rem;
    font-size: 3rem;
  }
}

.accommodation-parallax-wrapper {
  padding: 0 2rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btn-primary-style {
  padding: 0.4rem 0.6rem;
  border: 1px solid #000000;
  border-radius: 0.2rem;
  background-color: #000000;
  color: #ffffff;
  margin-top: 5rem;
}

.swiper-slide {
  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
  gap: 15px;
}

.swiper-slide > img {
  width: 100%;
  height: 70%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 25px;

  .title {
    font-weight: 500;
    margin: 2rem 0;
    font-size: 3rem;
  }

  .text {
    font-size: 1rem;
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
  }
}

.click-btn {
  display: flex;
  width: 180px;
  height: 40px;
  justify-content: center;
  align-items: center;
  line-height: 35px;
  margin-top: 4rem;
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  color: #000;
  text-decoration: none;
  transition: all 0.35s;
  box-sizing: border-box;
}

.btn-style903 {
  position: relative;
  border-color: #264B5DFF;
  color: #264B5DFF;

  &::before {
    width: 15px;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    transition: all 0.2s;
    transition-delay: 0.1s;
    background: #264B5DFF;
    content: "";
  }

  &:hover {
    background-color: #264B5DFF;
    color: #fff;

    &::before {
      left: 100%;
      transform: translate(-100%, -50%);
      background-color: #fff;
    }
  }
}

.accommodation-view {
  height: 800px;
  width: 100%;
  top: 0;
  left: 0;
  position: relative;
  background-image: linear-gradient(0deg, rgba(64, 64, 64, 0.5), rgba(64, 64, 64, 0.5)), url("@/assets/images/DSCF5771-scaled.jpg");
  background-size: cover;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.accommodation-view-content-top {
  text-align: left;
  width: 80%;
}

.accommodation-view-content-top h2 {
  font-weight: 500;
  margin: 2rem 0;
  font-size: 3rem;
}

.accommodation-view-content-top span {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
}

.accommodation-view-content-bottom {
  text-align: right;
  margin-top: 40px;
  width: 80%;
}

.accommodation-view-content-bottom h2 {
  font-weight: 500;
  margin: 2rem 0;
  font-size: 3rem;
}

.accommodation-view-content-bottom span {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
}

.accommodation-interview-facilities {
  padding: 1rem;
}

.accommodation-interview-facilities p {
  font-size: 1rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
  text-align: center;
  color: rgba(102, 101, 101, 0.64);
}

.accommodation-interview-facilities-wrapper {
  padding: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.wrapper {
  width: 90vw;
  height: 90vh;
  margin: 5vh;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 1rem;
  grid-template-areas:
    "box1 box1 box2 box3"
    "box1 box1 box4 box3"
    "box5 box6 box7 box7"
    "box8 box8 box9 box10";
}

.wrapper .grid-box {
  color: #BBBBBB;
  font-size: 5rem;
  font-family: sans-serif;;
  background-color: #EEEEEE;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  transition: all 250ms;
  animation: fadein 1s ease-out normal backwards;
}

.grid-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper .grid-box:hover {
  position: relative;
  z-index: 2;
  box-shadow: 0 1.5rem 2.8rem rgba(0, 0, 0, .15), 0 1rem 1rem rgba(0, 0, 0, .15);
  transform: translate(0, -0.5rem) scale(1.01);
}

.wrapper .element1 {
  grid-area: box1;
  animation-delay: 0;
}

.wrapper .element2 {
  grid-area: box2;
  animation-delay: 100ms;
}

.wrapper .element3 {
  grid-area: box3;
  animation-delay: 200ms;
}

.wrapper .element4 {
  grid-area: box4;
  animation-delay: 200ms;
}

.wrapper .element5 {
  grid-area: box5;
  animation-delay: 100ms;
}

.wrapper .element6 {
  grid-area: box6;
  animation-delay: 200ms;
}

.wrapper .element7 {
  grid-area: box7;
  animation-delay: 300ms;
}

.wrapper .element8 {
  grid-area: box8;
  animation-delay: 200ms;
}

.wrapper .element9 {
  grid-area: box9;
  animation-delay: 400ms;
}

.wrapper .element10 {
  grid-area: box10;
  animation-delay: 500ms;
}

.accommodation-info-wrapper {
  margin: 4rem 0;
  width: 100%;
  height: 400px;
  background-color: #595858;
}

@keyframes fadein {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
