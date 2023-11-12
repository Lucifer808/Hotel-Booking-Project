<script setup>

</script>

<template>
  <div class="room-details-container">
    <div class="room-thumbnail-wrapper">
      <div class="room-thumbnail-content">
        <h2>DOUBLE DELUXE SUITE</h2>
        <span>M HOTEL PHU QUOC</span>
      </div>
    </div>
    <div class="room-more-info-container">
      <v-card>
        <a-carousel-detail/>
        <h2 class="ml-2">M VILLAGE PHU QUOC</h2>
        <div>
          <v-icon class="ml-2" size="30" color="#BFA46A">mdi-star</v-icon>
          <v-icon class="ml-2" size="30" color="#BFA46A">mdi-star</v-icon>
          <v-icon class="ml-2" size="30" color="#BFA46A">mdi-star</v-icon>
          <v-icon class="ml-2" size="30" color="#BFA46A">mdi-star</v-icon>
        </div>
        <div class="d-flex align-center ml-2 mt-2">
          <v-icon size="15">mdi-map-marker-outline</v-icon>
          <span>189 đường Trần Hưng Đạo, Dương Đông, Phú Quốc, Kiên Giang, Việt Nam, Thành phố Rạch Giá, Kiên Giang, Việt Nam</span>
        </div>
        <div class="d-flex align-center ml-2 mt-2">
          <p>Bạn muốn đi một mình hay cùng người thương, gia đình hoặc một nhóm bạn thân? M Village luôn có đủ không
            gian để đáp ứng nhu cầu và trải nghiệm của bạn với 42 bungalow rộng rãi, thoáng mát cùng nhiều tiện ích hấp
            dẫn như bể bơi, phòng gym, phòng spa, vv.
            Ngoài ra, với vị trí nằm ngay trung tâm Phú Quốc, sẽ thật dễ dàng để đi tới các điểm tham quan du lịch nổi
            tiếng trên đảo như Dinh Cậu, Chợ Đêm Phú Quốc.
          </p>
        </div>
      </v-card>
      <v-card class="mt-6 pa-4">
        <h3 class="mb-2">Garden Double House</h3>
        <div class="d-flex">
          <div class="room-detail-left-wrapper">
            <img src="@/assets/images/Ocean-Eyes-Double-Suite-5-scaled.jpg">
            <div class="d-flex">
              <div class="d-flex align-center">
                <v-icon>mdi-human-male</v-icon>
                <p>x 2</p>
              </div>
              <div class="d-flex align-center ml-2">
                <v-icon>mdi-human-child</v-icon>
                <p>x 1</p>
              </div>
              <div class="d-flex align-center ml-2">
                <v-icon>mdi-baby-face-outline</v-icon>
                <p>x 0</p>
              </div>
            </div>
            <div class="d-flex align-center mt-2">
              <v-icon size="16">mdi-arrow-expand</v-icon>
              <p class="ml-2">39 m2</p>
            </div>
            <div class="d-flex align-center mt-2">
              <v-icon size="16">mdi-bed-queen-outline</v-icon>
              <p class="ml-2">Giường đơn</p>
            </div>
            <div class="d-flex align-center mt-2">
              <v-icon size="16">mdi-flower-outline</v-icon>
              <p class="ml-2">Hướng vườn</p>
            </div>
            <div class="d-flex align-center mt-2">
              <v-icon size="16">mdi-dots-horizontal</v-icon>
              <p class="ml-2">Xem thêm...</p>
            </div>
          </div>
          <div class="room-detail-right-wrapper px-4">
            <div class="d-flex justify-lg-space-between">
              <div class="room-detail-info-wrapper">
                <h3 class="glyphicon-text-color">Breakfast Included - Non Refundable</h3>
                <p>Non Refundable (-1.987.409 ₫ )</p>
                <div class="mt-4">
                  <div class="d-flex">
                    <div class="d-flex align-center">
                      <v-icon>mdi-human-male</v-icon>
                      <p>x 2</p>
                    </div>
                    <div class="d-flex align-center ml-2">
                      <v-icon>mdi-human-child</v-icon>
                      <p>x 1</p>
                    </div>
                    <div class="d-flex align-center ml-2">
                      <v-icon>mdi-baby-face-outline</v-icon>
                      <p>x 0</p>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-center mt-2">
                  <v-icon>mdi-ceiling-light</v-icon>
                  <span class="ml-2">Bed & Breakfast plan</span>
                </div>
                <div class="d-flex align-center mt-2">
                  <v-icon>mdi-text-box-outline</v-icon>
                  <span class="ml-2">Khách hàng cần thanh toán toàn bộ số tiền vào ngày đặt phòng.</span>
                </div>
                <div class="d-flex align-center mt-2">
                  <v-icon>mdi-close-circle</v-icon>
                  <span class="ml-2">Bed & Breakfast plan</span>
                </div>
              </div>
              <div class="room-detail-price-wrapper">
                <div>
                  <h4>1.762.420 ₫ (1 Đêm)</h4>
                  <span>
                    3.749.829 ₫
                  </span>
                  <p>Còn 5 phòng</p>
                </div>
                <div class="d-flex flex-column mt-2">
                  <div class="room-detail-quantity-wrapper">
                    <div class="value-button" id="decrease" @click="decreaseValue(typeOfInput.NUM_OF_ADULT)"
                         value="Decrease Value">-
                    </div>
                    <input v-model="numOfAdult" type="number" id="number"/>
                    <div class="value-button" id="increase" @click="increaseValue(typeOfInput.NUM_OF_ADULT)"
                         value="Increase Value">+
                    </div>
                  </div>
                </div>
                <div class="mt-10">
                  <v-btn color="#425149">Chọn</v-btn>
                  <v-btn class="ml-2" color="#425149">Đặt ngay</v-btn>
                </div>
              </div>
            </div>
            <v-divider class="my-4"/>
            <div class="d-flex justify-lg-space-between">
              <div class="room-detail-info-wrapper">
                <h3 class="glyphicon-text-color">Breakfast Included - Non Refundable</h3>
                <p>Non Refundable (-1.987.409 ₫ )</p>
                <div class="mt-4">
                  <div class="d-flex">
                    <div class="d-flex align-center">
                      <v-icon>mdi-human-male</v-icon>
                      <p>x 2</p>
                    </div>
                    <div class="d-flex align-center ml-2">
                      <v-icon>mdi-human-child</v-icon>
                      <p>x 1</p>
                    </div>
                    <div class="d-flex align-center ml-2">
                      <v-icon>mdi-baby-face-outline</v-icon>
                      <p>x 0</p>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-center mt-2">
                  <v-icon>mdi-ceiling-light</v-icon>
                  <span class="ml-2">Bed & Breakfast plan</span>
                </div>
                <div class="d-flex align-center mt-2">
                  <v-icon>mdi-text-box-outline</v-icon>
                  <span class="ml-2">Khách hàng cần thanh toán toàn bộ số tiền vào ngày đặt phòng.</span>
                </div>
                <div class="d-flex align-center mt-2">
                  <v-icon>mdi-close-circle</v-icon>
                  <span class="ml-2">Bed & Breakfast plan</span>
                </div>
              </div>
              <div class="room-detail-price-wrapper">
                <div>
                  <h4>1.762.420 ₫ (1 Đêm)</h4>
                  <span>
                    3.749.829 ₫
                  </span>
                  <p>Còn 5 phòng</p>
                </div>
                <div class="d-flex flex-column mt-2">
                  <div class="room-detail-quantity-wrapper">
                    <div class="value-button" id="decrease" @click="decreaseValue(typeOfInput.NUM_OF_ADULT)"
                         value="Decrease Value">-
                    </div>
                    <input v-model="numOfAdult" type="number" id="number"/>
                    <div class="value-button" id="increase" @click="increaseValue(typeOfInput.NUM_OF_ADULT)"
                         value="Increase Value">+
                    </div>
                  </div>
                </div>
                <div class="mt-10">
                  <v-btn color="#425149">Chọn</v-btn>
                  <v-btn class="ml-2" color="#425149">Đặt ngay</v-btn>
                </div>
              </div>
            </div>
          </div>

        </div>

      </v-card>
    </div>
  </div>
</template>

<style scoped>
.room-details-container {
  margin: 2rem 0;
  font-weight: lighter;
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
  padding: 0 8rem;
  width: 100%;
  height: 100%;
}

.room-detail-left-wrapper img {
  height: 10rem;
  width: 14rem;
}

.room-detail-right-wrapper {
  width: 100%;
}

.room-detail-quantity-wrapper {
  display: flex;
  height: 1rem;
  text-align: center;
  margin-top: 1rem;
}

.value-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 2rem;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

.room-detail-quantity-wrapper #decrease {
  margin-right: -4px;
  border-radius: 4px 0 0 4px;
}

.room-detail-quantity-wrapper #increase {
  margin-left: -4px;
  border-radius: 0 4px 4px 0;
}

.room-detail-quantity-wrapper #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  width: 6rem;
  height: 2rem;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.v-text-field.v-text-field--solo .v-input__control {
  padding: 0;
}
</style>
