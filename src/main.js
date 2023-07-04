import { createApp } from 'vue'
import './assets/gob.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus,{theme: '#3473e6'}).mount('#app')
