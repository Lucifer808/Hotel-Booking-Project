<template>
  <div>
    <v-app>
      <default-bar/>
      <a-carousel>
        <template v-slot:search-bar>
          <a-search-bar/>
        </template>
      </a-carousel>
      <accommodation/>
      <default-view/>
    </v-app>
  </div>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import Accommodation from "./Accommodation.vue";
import AFooter from "@/components/core/AFooter.vue";
</script>
