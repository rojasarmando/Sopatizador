import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import UppercaseInput from "./directives/UppercaseInput";

// import './assets/main.css'

const app = createApp(App);
app.directive("uppercase", UppercaseInput);

app.use(router);

app.mount("#app");
