// import "./assets/main.css";
// import { createApp } from "vue";
// import App from "./App.vue";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import router from "./router";

// const app = createApp(App);
// app.use(router);
// app.mount("#app"); // Chỉ mount một lần!
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faCheck, faTimes);

import router from "./router";

const app = createApp(App);
app.use(router);


app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
