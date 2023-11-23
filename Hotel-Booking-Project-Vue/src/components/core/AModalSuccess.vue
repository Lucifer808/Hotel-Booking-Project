<script setup>
import {computed, watch} from "vue";

const props = defineProps({
  showAModalSuccess: {
    type: Boolean,
    default: false
  },
  closeDialog: {
    type: Function,
    default: () => {
    }
  }
})
let dialog = computed(() => {
  return props.showAModalSuccess
})
watch(dialog, (newValue) => {
  if (!newValue) return

  setTimeout(() => (props.closeDialog()), 2000)
})
</script>

<template>
  <v-dialog
    v-model="dialog"
    :scrim="false"
    persistent
    width="auto"
  >
    <v-card
      color="primary"
    >
      <v-card-text>
        Please stand by
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.succes {
  background-color: #4BB543;
}

.succes-animation {
  animation: succes-pulse 2s infinite;
}

.custom-modal {
  position: relative;
  width: 350px;
  min-height: 250px;
  background-color: #fff;
  border-radius: 30px;
  margin: 40px 10px;
}

.custom-modal .content {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
}

.custom-modal .content .type {
  font-size: 18px;
  color: #999;
}

.custom-modal .content .message-type {
  font-size: 24px;
  color: #000;
}

.custom-modal .border-bottom {
  position: absolute;
  width: 300px;
  height: 20px;
  border-radius: 0 0 30px 30px;
  bottom: -20px;
  margin: 0 25px;
}

.custom-modal .icon-top {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: -30px;
  margin: 0 125px;
  font-size: 30px;
  color: #fff;
  line-height: 100px;
  text-align: center;
}

@keyframes succes-pulse {
  0% {
    box-shadow: 0px 0px 30px 20px rgba(75, 181, 67, .2);
  }
  50% {
    box-shadow: 0px 0px 30px 20px rgba(75, 181, 67, .4);
  }
  100% {
    box-shadow: 0px 0px 30px 20px rgba(75, 181, 67, .2);
  }
}

@keyframes danger-pulse {
  0% {
    box-shadow: 0px 0px 30px 20px rgba(202, 11, 0, .2);
  }
  50% {
    box-shadow: 0px 0px 30px 20px rgba(202, 11, 0, .4);
  }
  100% {
    box-shadow: 0px 0px 30px 20px rgba(202, 11, 0, .2);
  }
}
</style>
