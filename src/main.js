import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"
import Axios from "axios"
import '././assets/styles/fonts.css'

Axios.defaults.baseURL = 'http://localhost:8888/wordpress-podcast'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');