<template>
  <div class="app-bar-container">
    <div>
      <img class="logo-customize" src="../../assets/images/minh_loan_hotel.jpg"/>
    </div>
    <ul>
      <li><a class="nav-bar-item" href="#">Trang Chủ</a>
      </li>
      <li>
        <div class="dropdown">
          <a class="nav-bar-item"
             href="#">Phòng
            <v-icon style="height: 10px">mdi-menu-down</v-icon>
          </a>
          <div class="dropdown-content">
            <a href="billing">M Hotel Phu Quoc</a>
            <a href="settings">Settings</a>
            <a href="logout">Logout 3</a>
          </div>
        </div>
      </li>
      <li><a class="nav-bar-item" href="#">Giới Thiệu</a></li>
      <li><a class="nav-bar-item" href="#">Liên Hệ</a></li>
    </ul>
    <ul>
      <li><a class="nav-bar-item" href="#">Đăng Ký</a></li>
      <li><a class="nav-bar-item" href="#">Đăng Nhập</a></li>
    </ul>
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.app-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
  align-items: center;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 500;
  color: $base-color;
  z-index: 9999;
  padding: 0.1em 0;
  border-bottom: 1px solid #ccc;
}

ul {
  padding: 0;
  list-style: none;
  display: table;
  text-align: center;
}

li {
  display: table-cell;
  position: relative;
}

.nav-bar-item {
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

.nav-bar-item:after {
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.nav-bar-item:hover:after {
  width: 100%;
  left: 0;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #4d1c33;
}

.logo-customize {
  width: 40px;
  height: 40px;
}
</style>
