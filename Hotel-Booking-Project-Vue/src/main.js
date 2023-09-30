/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import components from "./components/core";
// Composables
import {createApp} from 'vue'

// Plugins
import {registerPlugins} from '@/plugins'

const app = createApp(App)

Object.keys(components).forEach(componentName => {
  console.log("1", componentName)
  app.component(componentName, components[componentName])
})
registerPlugins(app)

app.mount('#app')
