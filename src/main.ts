import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@popperjs/core/dist/umd/popper.min.js"

import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
