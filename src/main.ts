import { createApp } from 'vue'
import TimeScreen from './TimeScreen.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(TimeScreen)

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.mount('#time-screen')
