import { createApp } from 'vue'
import TimeScreen from './TimeScreen.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(TimeScreen)

app.use(pinia)
app.mount('#time-screen')
