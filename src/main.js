import { createApp } from "vue";

import ImageGame from "./components/ImageGame.vue";
import ImageContainer from "./components/ImageContainer.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);

app.component("image-game", ImageGame);
app.component("image-container", ImageContainer);
app.component("vue-countdown", VueCountdown);

app.mount("#app");
