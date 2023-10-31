<template>
  <v-main>
    <a-carousel>
      <template v-slot:search-bar>
        <a-search-bar/>
      </template>
    </a-carousel>
    <accommodation/>
  </v-main>
</template>

<script setup>
import Accommodation from "../components/HomePage/Accommodation.vue";
</script>
