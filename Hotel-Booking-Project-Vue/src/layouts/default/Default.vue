<template>
  <div>
    <v-app>
      <default-bar/>
      <a-carousel/>
      <a-search-bar/>
      <default-view/>
    </v-app>
  </div>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import ACarousel from "@/components/core/ACarousel.vue";
import ASearchBar from "@/components/core/ASearchBar.vue";
</script>
