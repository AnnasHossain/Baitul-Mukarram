import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import './assets/simple.css'
import './registerServiceWorker'
import '../public/manifest.json'

createApp(App).use(router).mount('#app')
