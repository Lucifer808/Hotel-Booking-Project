<template>
  <div class="app-bar-container">
    <div class="logo-custom-style">
      <p href="#">LOGO</p>
    </div>
    <ul>
      <li><a href="#">Abouts
        <v-icon style="height: 10px">mdi-menu-down</v-icon>
      </a>
      </li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.app-bar-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px #ccc;
  font-size: 14px;
  font-weight: 600;
  color: $base-color;
}

.logo-custom-style {
  padding: 15px 20px;
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

a {
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

a:after {
  background: none repeat scroll 0 0 transparent;
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

a:hover:after {
  width: 100%;
  left: 0;
}

@media screen and (max-height: 300px) {
  ul {
    margin-top: 40px;
  }
}
</style>
