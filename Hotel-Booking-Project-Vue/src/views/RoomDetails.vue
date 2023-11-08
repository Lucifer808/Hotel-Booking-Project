<script setup>

</script>

<template>
  <div class="room-booking-container">
    <div class="room-thumbnail-wrapper">
      <div class="room-thumbnail-content">
        <h2>DOUBLE DELUXE SUITE</h2>
        <span>M HOTEL PHU QUOC</span>
      </div>
    </div>
    <div class="room-more-info-container">
      <div class="room-more-info-left-wrapper">
        <h4>More information</h4>
        <span>
Above our La Petite room is our Double Deluxe Suite, perfect for couples who wishes to have a more spacious area. The Double Deluxe Suite comes with a large bed, one bathroom and one luxurious bath tub (including bath salts), a minibar for light snacks and beverages, and other general in-room amenities.
        </span>
        <div class="room-more-info-image-left-wrapper">
          <img src="../assets/images/Deluxe-twin-Suite-City-View-with-Balcony-7-scaled.jpg" alt="">
          <img src="../assets/images/Deluxe-twin-Suite-City-View-with-Balcony-7-scaled.jpg" alt="">
          <img src="../assets/images/Deluxe-twin-Suite-City-View-with-Balcony-7-scaled.jpg" alt="">
          <img src="../assets/images/Deluxe-twin-Suite-City-View-with-Balcony-7-scaled.jpg" alt="">
        </div>
        <div class="room-more-info-contact-container">
          <div class="room-more-info-contact-wrapper">
            <h4>Address</h4>
            <span>46 Tran Hung Dao St, Duong Dong, Phu Quoc, Vietnam</span>
          </div>
          <div class="room-more-info-contact-wrapper">
            <h4>Phone</h4>
            <span>+84 29 7351 8686</span>
          </div>
          <div class="room-more-info-contact-wrapper">
            <h4>Email</h4>
            <span>info.pq@mhotel.vn</span>
          </div>
        </div>
      </div>
      <div class="room-more-info-right-wrapper">
        <h4>Double Deluxe Suite</h4>
        <h5>Highlights:</h5>
        <div class="room-more-info-right-highlights-wrapper">
          <ul>
            <li>In-room dining</li>
            <li>Mattresses designed exclusively for M Hotel</li>
            <li>Free wireless internet access</li>
            <li>Bath Tub and Rain showers</li>
            <li>Access to Spa and Gym</li>
          </ul>
        </div>
        <router-link to="/room-booking">
          <button class="room-more-info-right-btn">Book Now</button>
        </router-link>
        <div class="room-more-info-right-special-offer-wrapper">
          <h4>Special Offers</h4>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.room-booking-container {
  margin: 2rem 0;
}

.room-thumbnail-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(0deg, rgba(64, 64, 64, 0.5), rgba(64, 64, 64, 0.5)), url("@/assets/images/Deluxe-twin-Suite-City-View-with-Balcony-7-scaled.jpg");
  height: 400px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
}

.room-thumbnail-content {
  font-family: "raleway", sans-serif;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.room-thumbnail-content h2 {
  font-size: 3rem;
}

.room-thumbnail-content span {
  font-size: 2rem;
}

.room-more-info-container {
  margin-top: 4rem;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-around;
}

.room-more-info-left-wrapper {
  font-weight: 300;
  border-top: 1px solid #cccccc;
  width: 50vw;
}

.room-more-info-left-wrapper h4 {
  font-weight: 100;
  font-size: 1.8rem;
  margin: 1rem 0;
}

.room-more-info-left-wrapper span {
  font-weight: 100;
  color: rgba(144, 143, 143, 0.9)
}

.room-more-info-right-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 30vw;
}

.room-more-info-image-left-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.room-more-info-image-left-wrapper img {
  height: 120px;
  width: 200px;
  margin-right: 1rem;

  &:hover {
    background-color: #30373f;
    cursor: pointer;
  }
}

.room-more-info-contact-container {
  display: flex;
}

.room-more-info-contact-wrapper {
  width: 20rem;
}

.room-more-info-right-wrapper h4 {
  font-weight: 100;
  font-size: 1.8rem;
  margin: 1rem 0;
  text-align: left;
  padding-bottom: 1rem;
  border-bottom: 1px solid #cccccc;
}

.room-more-info-right-highlights-wrapper {
  margin-top: 1rem;
}

.room-more-info-right-btn {
  width: 100%;
  color: #ffffff;
  background-color: #000000;
  padding: .6rem 0;
  margin-top: 1rem;

  &:hover {
    color: #fff;
    background-color: #30373f;
    cursor: pointer;
  }
}

</style>
