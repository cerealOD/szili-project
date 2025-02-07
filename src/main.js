import { createApp } from "vue";

import ImageGame from "./components/ImageGame.vue";
import ImageContainer from "./components/ImageContainer.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import Video from "./components/Video.vue";

import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App).use(router);

app.component("image-game", ImageGame);
app.component("image-container", ImageContainer);
app.component("vue-countdown", VueCountdown);
app.component("video", Video);

app.mount("#app");
