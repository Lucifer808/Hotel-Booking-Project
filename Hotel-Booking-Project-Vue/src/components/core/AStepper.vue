<script setup>
import {computed} from "vue";

const props = defineProps({
  menus: {
    type: Array,
    default: () => []
  },
  activeStep: {
    type: Number,
    default: 2
  }
})

let activeStep = computed(() => {
  return props.activeStep
})
</script>

<template>
  <v-stepper class="elevation-0" v-model="activeStep">
    <v-stepper-header class="elevation-0">
      <template :key="index" v-for="(menu, index) in menus">
        <v-stepper-item
          :title="menu.title"
          :value="menu.value"
          :complete="activeStep > menu.value"
        ></v-stepper-item>
        <v-divider v-if="index < menus.length - 1"/>
      </template>
    </v-stepper-header>
    <slot/>
  </v-stepper>
</template>

<style scoped>
</style>
