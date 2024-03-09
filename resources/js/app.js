import { createApp, h } from "vue";
import App from "./App.vue";
import axios from "axios";
import { router } from "./routes";
import VueAxios from "vue-axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp({
    render: () => h(App),
});

app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
