import { createApp } from 'vue'
import App from './BlogApp.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
