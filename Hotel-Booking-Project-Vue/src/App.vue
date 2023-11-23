<template>
  <div>
    <v-app>
      <app-bar/>
      <router-view/>
      <a-footer/>
    </v-app>
  </div>
</template>

<script setup>
//
import AppBar from "@/components/core/AppBar.vue";
import AFooter from "@/components/core/AFooter.vue";
</script>
<style>
@font-face {
  font-family: "raleway", sans-serif;
  src: url('~@/assets/fonts/RaleWay/static/Raleway-Bold.ttf'),
  url('~@/assets/fonts/RaleWay/static/Raleway-Medium.ttf'),
  url('~@/assets/fonts/RaleWay/static/Raleway-ExtraBold.ttf'),
  url('~@/assets/fonts/RaleWay/static/Raleway-Light.ttf');
}

html, body {
  margin: 0;
  padding: 0;
  font-family: "raleway", sans-serif;
}
</style>
