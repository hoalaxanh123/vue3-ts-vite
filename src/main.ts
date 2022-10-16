import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

const pinia = createPinia()
const vuetify = createVuetify() // Replaces new Vuetify()

createApp(App).use(vuetify).use(pinia).mount('#app')
