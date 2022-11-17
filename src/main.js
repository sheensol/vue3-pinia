import { createApp } from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";

const app = createApp(App);

const pinia = createPinia();

axios.defaults.baseURL = "http://openlibrary.org/";
app.use(VueAxios, axios);
app.use(router);
app.use(pinia);

library.add(faSpinner)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");
