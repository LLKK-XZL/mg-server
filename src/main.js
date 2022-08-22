import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import elementUI from 'element-plus'
import axios from 'axios'
import config from './config'

console.log("环境变量=》import", import.meta.env)

const app = createApp(App)

app
    .use(router)
    .use(elementUI)
    .mount('#app')
