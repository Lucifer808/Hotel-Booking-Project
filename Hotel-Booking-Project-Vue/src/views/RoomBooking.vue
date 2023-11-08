<script setup>
import {reactive, ref} from "vue";

let activeStep = ref(2)
let numOfAdult = ref(0)
let numOfChild = ref(0)
let numOfBaby = ref(0)
const handleNextStep = () => {
  activeStep.value = 3;
}
const typeOfInput = {
  NUM_OF_ADULT: "numOfAdult",
  NUM_OF_CHILD: "numOfChild",
  NUM_OF_BABY: "numOfBaby"
}
const menus = reactive([
  {
    title: "Thông tin khách sạn",
    value: 1
  },
  {
    title: "Chi tiết thanh toán",
    value: 2
  },
  {
    title: "Đã xác nhận đặt phòng",
    value: 3
  }
])
const increaseValue = (increaseField) => {
  switch (increaseField) {
    case typeOfInput.NUM_OF_ADULT:
      numOfAdult.value++;
      break;
    case typeOfInput.NUM_OF_CHILD:
      numOfChild.value++;
      break;
    case typeOfInput.NUM_OF_BABY:
      numOfBaby.value++;
      break;
    default:
      break;
  }
}

const decreaseValue = (decreaseField) => {
  switch (decreaseField) {
    case typeOfInput.NUM_OF_ADULT:
      numOfAdult.value++;
      break;
    case typeOfInput.NUM_OF_CHILD:
      numOfChild.value++;
      break;
    case typeOfInput.NUM_OF_BABY:
      numOfBaby.value++;
      break;
    default:
      break;
  }
}
</script>

<template>
  <div class="mt-12">
    <a-stepper :activeStep="activeStep" :menus="menus">
      <div class="room-booking-container mt-5">
        <div class="room-booking-left-container">
          <div class="room-booking-left-info-wrapper justify-lg-space-between">
            <div class="hotel-detail-info-left-wrapper">
              <div class="d-flex">
                <v-icon>mdi-home-city-outline</v-icon>
                <div class="ml-4">
                  <h4>M VILLAGE PHU QUOC</h4>
                  <v-icon color="yellow">mdi-star</v-icon>
                  <v-icon color="yellow">mdi-star</v-icon>
                  <v-icon color="yellow">mdi-star</v-icon>
                  <v-icon color="yellow">mdi-star</v-icon>
                </div>
              </div>
              <div class="d-flex mt-2">
                <v-icon>mdi-map-marker-outline</v-icon>
                <div class="ml-4 text-light">
                  <span class="address-custom-style">189 đường Trần Hưng Đạo, Dương Đông, Phú Quốc, Kiên Giang, Việt Nam, Thành phố Rạch Giá, Kiên Giang, Việt Nam</span>
                </div>
              </div>
            </div>
            <div class="hotel-detail-info-right-wrapper">
              <div>
                <h5>1 Phòng, 1 Đêm, 2 Người lớn, 0 Trẻ em, 0 Em bé</h5>
              </div>
              <div class="d-flex align-center justify-lg-space-between mt-4">
                <div class="d-flex align-center justify-center">
                  <v-icon>mdi-calendar-arrow-right</v-icon>
                  <h5 class="ml-1">Nhận phòng</h5>
                </div>
                <div>
                  06/11/2023
                </div>
              </div>
              <div class="d-flex align-center justify-lg-space-between mt-3">
                <div class="d-flex align-center justify-center">
                  <v-icon>mdi-calendar-arrow-left</v-icon>
                  <h5 class="ml-1">Trả phòng</h5>
                </div>
                <div>
                  07/11/2023
                </div>
              </div>
            </div>
          </div>
          <div class="room-booking-left-info-wrapper flex-column">
            <h3>Phòng đã chọn</h3>
            <div class="room-detail-info-warpper">
              <h4>Phòng 1: Garden Double House</h4>
              <div class="d-flex justify-lg-space-around">
                <v-col cols="5">
                  <v-row class="d-flex flex-column mt-2">
                    <span>Tên khách</span>
                    <v-text-field
                      label="Họ và tên"
                      required
                      :bg-color="'#ffffff'"
                      hide-details
                      density="comfortable"
                      class="p-0"
                    />
                  </v-row>
                </v-col>
                <v-col cols="2">
                  <v-row class="d-flex flex-column mt-2 ml-2">
                    <span>Người lớn</span>
                    <div class="room-detail-quantity-wrapper">
                      <div class="value-button" id="decrease" @click="decreaseValue(typeOfInput.NUM_OF_ADULT)"
                           value="Decrease Value">-
                      </div>
                      <input v-model="numOfAdult" type="number" id="number"/>
                      <div class="value-button" id="increase" @click="increaseValue(typeOfInput.NUM_OF_ADULT)"
                           value="Increase Value">+
                      </div>
                    </div>
                  </v-row>
                </v-col>
                <v-col cols="2">
                  <v-row class="d-flex flex-column mt-2 ml-2">
                    <span>Trẻ em</span>
                    <div class="room-detail-quantity-wrapper">
                      <div class="value-button" id="decrease" @click="decreaseValue(typeOfInput.NUM_OF_CHILD)"
                           value="Decrease Value">
                        -
                      </div>
                      <input v-model="numOfChild" type="number" id="number"/>
                      <div class="value-button" id="increase" @click="increaseValue(typeOfInput.NUM_OF_CHILD)"
                           value="Increase Value">
                        +
                      </div>
                    </div>
                  </v-row>
                </v-col>
                <v-col cols="2">
                  <v-row class="d-flex flex-column mt-2 ml-2">
                    <span>Em bé</span>
                    <div class="room-detail-quantity-wrapper">
                      <div class="value-button" id="decrease" @click="decreaseValue(typeOfInput.NUM_OF_BABY)"
                           value="Decrease Value">
                        -
                      </div>
                      <input v-model="numOfBaby" type="number" id="number"/>
                      <div class="value-button" id="increase" @click="increaseValue(typeOfInput.NUM_OF_BABY)"
                           value="Increase Value">
                        +
                      </div>
                    </div>
                  </v-row>
                </v-col>
              </div>

            </div>
          </div>
          <div class="room-booking-left-info-wrapper flex-column">
            <h3>Yêu cầu bổ sung</h3>
            <v-textarea rows="3" label="Yêu cầu bổ sung"/>
          </div>
          <div class="room-booking-left-info-wrapper flex-column">
            <h3 class="mb-2">Chính sách khách sạn</h3>
            <div>
              <v-icon size="16">mdi-login</v-icon>
              <span class="font-weight-light ml-2">Thời gian nhận phòng</span>
              <div>
                <span class="font-weight-light ml-6">Từ 2:00 CH</span>
              </div>
            </div>
            <div class="mt-2">
              <v-icon size="16">mdi-logout</v-icon>
              <span class="font-weight-light ml-2">Thời gian trả phòng</span>
              <div>
                <span class="font-weight-light ml-6">Cho đến 12:00 CH</span>
              </div>
            </div>
            <div class="mt-2">
              <v-icon size="16">mdi-human-child</v-icon>
              <span class="font-weight-light ml-2">Chính sách trẻ em</span>
              <div>
                <span class="font-weight-light ml-6">Miễn phí cho trẻ em dưới 6 tuổi ở chung với bố mẹ khi sử dụng giường có sẵn.</span>
                <ul class="font-weight-light ml-10">
                  <li>Trẻ em từ 6 - 11 tuổi ở chung với bố mẹ sử dụng giường có sẵn và áp dụng phụ thu mỗi đêm. Phí phụ
                    thu chưa bao gồm trong giá phòng và được thanh toán trực tiếp tại khách sạn khi nhận phòng.
                  </li>
                  <li>Trẻ em trên 11 tuổi được tính như giá người lớn.</li>
                </ul>
              </div>
            </div>
            <div class="mt-2">
              <v-icon size="16">mdi-cash</v-icon>
              <span class="font-weight-light ml-2">Chính sách thanh toán</span>
              <div>
                <span
                  class="font-weight-light ml-6">Khách hàng cần thanh toán toàn bộ số tiền vào ngày đặt phòng.</span>
              </div>
            </div>
            <div class="mt-2">
              <v-icon size="16">mdi-close-circle</v-icon>
              <span class="font-weight-light ml-2">Chính sách hủy</span>
              <div>
                <ul class="font-weight-light ml-10">
                  <li>Khách hàng được hủy miễn phí nếu hủy trước 7 ngày trước khi tới nhận phòng, nếu hủy đặt phòng
                    trong
                    vòng 7 ngày trước khi tới nhận phòng khách hàng sẽ phải chịu phí hủy là 100% giá trị đặt phòng.
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-2">
              <v-icon size="16">mdi-credit-card-outline</v-icon>
              <span class="font-weight-light ml-2">Chính sách khác</span>
              <div class="my-2">
                <span class="font-weight-light ml-6">* Chính sách giường phụ:</span>
                <ul class="font-weight-light ml-10">
                  <li>Khách hàng được hủy miễn phí nếu hủy trước 7 ngày trước khi tới nhận phòng, nếu hủy đặt phòng
                    trong
                    vòng 7 ngày trước khi tới nhận phòng khách hàng sẽ phải chịu phí hủy là 100% giá trị đặt phòng.
                  </li>
                </ul>
              </div>
              <div class="my-2">
                <span class="font-weight-light ml-6">* Chính sánh khách sạn:</span>
                <ul class="font-weight-light ml-10">
                  <li>Vui lòng xuất trình giấy tờ tùy thân có ảnh và thẻ tín dụng vào thời điểm nhận phòng.</li>
                  <li>Tất cả các yêu cầu đặc biệt sẽ tùy thuộc vào tình trạng phòng và có thể phát sinh phụ phí.</li>
                </ul>
              </div>
              <div class="my-2">
                <span class="font-weight-light ml-6">* Tiền cọc đảm bảo :</span>
                <ul class="font-weight-light ml-10">
                  <li>Để đề phòng hư hại không may phát sinh trong thời gian lưu trú, quý khách vui lòng đặt cọc VND
                    500000 cho mỗi phòng mỗi đêm . Số tiền này sẽ được khách sạn thu bằng tiền mặt. Bạn sẽ được hoàn lại
                    toàn bộ tiền cọc khi trả phòng tùy thuộc vào tình trạng hư hại (nếu có) của khách sạn.
                  </li>
                </ul>
              </div>
              <div class="my-2">
                <span class="font-weight-light ml-6">* Chính sách đặt phòng:</span>
                <ul class="font-weight-light ml-10">
                  <li>Yêu cầu đặt phòng sẽ tự động hủy khi Quý khách chưa hoàn thành thanh toán.</li>
                  <li>Sau khi thanh toán thành công, xác nhận đặt phòng sẽ được gửi về địa chỉ email của Quý khách. Để
                    biết thêm thông tin, vui lòng liên hệ fomvillagephuquoc@m-group.com.vn
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div class="room-booking-right-container">
          <div class="room-booking-right-info-wrapper d-flex flex-column pa-4">
            <h3 class="mb-2">Thông tin khách</h3>
            <div>
              <v-text-field
                variant="outlined"
                label="Tên của bạn*"
                prepend-inner-icon="mdi-account-group"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                variant="outlined"
                label="Số điện thoại"
                prepend-inner-icon="mdi-phone-outline"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                variant="outlined"
                label="Email*"
                prepend-inner-icon="mdi-email-outline"
              ></v-text-field>
            </div>
            <div>
              <v-text-field
                class="pa-0"
                variant="outlined"
                label="Ngày sinh"
                prepend-inner-icon="mdi-calendar-month-outline"
              ></v-text-field>
            </div>
          </div>
          <div class="room-booking-right-info-wrapper d-flex flex-column mt-8">
            <h3 class="my-2 px-4">Thông tin thanh toán</h3>
            <div class="d-flex justify-lg-space-between py-2 bg-primary px-4">
              <h4>Chi tiết</h4>
              <h4>Giá (đ)</h4>
            </div>
            <div class="d-flex justify-lg-space-between py-2 px-4 border-b-sm">
              <div class="w-50">
                <h4>Phòng 1: Garden Double House</h4>
                <span class="font-weight-light">Breakfast Included</span>
              </div>
              <p>3.749.829 ₫</p>
            </div>
            <div class="border-b-sm">
              <div class="d-flex justify-lg-space-between py-2 px-4">
                <div class="w-50">
                  <h4>Tiền phòng</h4>
                </div>
                <p>3.749.829 ₫</p>
              </div>
              <div class="d-flex justify-lg-space-between py-2 px-4">
                <div class="w-50">
                  <h4>Phụ phí</h4>
                </div>
                <p>0 ₫</p>
              </div>
              <div class="d-flex justify-lg-space-between py-2 px-4">
                <div class="w-50">
                  <h4>Dịch vụ</h4>
                </div>
                <p>0 ₫</p>
              </div>
              <div class="d-flex justify-lg-space-between py-2 px-4">
                <div class="w-50">
                  <h4>Khuyến mãi</h4>
                </div>
                <p class="text-green">-3.749.829 ₫</p>
              </div>
            </div>
            <div class="d-flex justify-lg-space-between py-2 px-4">
              <div class="w-50">
                <h4>Tổng thanh toán</h4>
              </div>
              <p>3.749.829 ₫</p>
            </div>
            <p class="font-weight-light px-4 custom-font-size">(Bao gồm thuế GTGT 8% và phí dịch vụ 5%)</p>
          </div>
          <v-btn @click="handleNextStep" class="booking-btn" color="#425149">Đặt phòng ngay</v-btn>
        </div>
      </div>
    </a-stepper>
  </div>
</template>

<style scoped>
.room-booking-container {
  padding: 0 8rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  width: 100vw;
}

.room-booking-left-info-wrapper {
  display: flex;
  padding: 1rem;
  width: 50vw;
  height: 100%;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, .15), 0 1px 0 0 rgba(0, 0, 0, .2);
  margin-bottom: 2rem;
  border-radius: 2px;
}

.hotel-detail-info-left-wrapper {
  max-width: 50%;
  margin-right: 1rem;
}

.room-booking-right-info-wrapper {
  width: 25vw;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, .15), 0 1px 0 0 rgba(0, 0, 0, .2);
}

.hotel-detail-info-right-wrapper {
  background-color: #f5f5f5;
  padding: 1rem;
}

.address-custom-style {
  font-weight: lighter;
  font-size: 15px;
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
  width: 40px;
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

.custom-font-size {
  font-size: .8rem;
  text-align: right;
}

.booking-btn {
  width: 100%;
  margin-top: 2rem;
}
</style>
