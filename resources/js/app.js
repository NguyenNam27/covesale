import {createApp} from "vue";
require('./bootstrap');
import App from "./App.vue";
import axios from "axios";
import router from "./router";
const app = createApp()
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')
