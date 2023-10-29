<script setup>

</script>
<template>
  <div class="footer-wrapper">
    <div class="footer-content-top">
      <div class="footer-content-top-wrapper">
        <div class="footer-content-top-title">
          <h4>M HOTEL SAIGON</h4>
        </div>
        <div class="footer-content-top-subtitle">
          <p>Tel: +84 28 3821 2888</p>
          <p>Email: info@mhotel.vn</p>
        </div>
      </div>
      <div class="footer-content-top-wrapper">
        <div class="footer-content-top-title">
          <h4>Giải thưởng</h4>
        </div>
        <div class="footer-content-top-subtitle">
          <p>2023 Best Hotel Rewards</p>
        </div>
      </div>
      <div class="footer-content-top-wrapper">
        <div class="footer-content-top-title">
          <h4>Liên hệ</h4>
        </div>
        <div class="footer-content-top-subtitle">
          <p>For enquiries, please contact:
            info@m-group.com.vn </p>
        </div>
      </div>
      <div class="footer-content-top-wrapper">
        <div class="footer-content-top-title">
          <h4>Theo dõi tại</h4>
        </div>
        <div class="footer-content-top-subtitle">
          <p>Tel: +84 28 3821 2888</p>
          <p>Email: info@mhotel.vn</p>
        </div>
      </div>
    </div>
    <div class="footer-content-bottom">
      <span>
        Site contents © Duy Nguyen – All rights reserved
      </span>
    </div>
  </div>
</template>

<style scoped>
.footer-wrapper {
  width: 100%;
  height: 100%;
  background-color: #000000;
  color: #ffffff;
}

.footer-content-top {
  display: flex;
  justify-content: space-between;
}

.footer-content-top-subtitle p {
  margin: 1rem 0;
}

.footer-content-top-wrapper {
  padding: 4rem;
}

.footer-content-bottom {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #cccccc;
  margin: 10rem 0 4rem 0;
}

.footer-content-bottom span {
  position: absolute;
  bottom: 0;
}
</style>
