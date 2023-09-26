import lodash from "lodash"
import Vue from "vue"
import App from "@/App.vue";

const app = Vue.createApp(App)
app.config.globalProperties.$_ = lodash
