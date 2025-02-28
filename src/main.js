import './assets/css/style.css'

import router from '../src/router/index.js'


import { createApp } from 'vue'
import App from './App.vue'





//createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')