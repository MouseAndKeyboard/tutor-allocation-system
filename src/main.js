import { createApp } from "vue";
import Home from "./pages/Home.vue";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueNumberInput from "@chenfengyuan/vue-number-input";

import "./assets/main.css";

const app = createApp(Home);

app.component("Datepicker", Datepicker);
app.component(VueNumberInput.name, VueNumberInput);

app.mount("#app");
