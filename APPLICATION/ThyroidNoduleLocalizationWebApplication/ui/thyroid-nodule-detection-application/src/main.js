import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)
app.config.globalProperties.hostname = "https://localhost:6001"
app.use(router)
app.use(VueApexCharts);
app.use(VueAxios,axios)
app.mount('#app')