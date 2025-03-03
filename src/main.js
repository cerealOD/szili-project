import { createApp } from "vue";

import ImageGame from "./components/ImageGame.vue";
import ImageContainer from "./components/ImageContainer.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import Video from "./components/Video.vue";
import SideInfo from "./components/SideInfo.vue";
import MarmosetViewer from "./components/MarmosetViewer.vue";
import ExpandingText from "./components/ExpandingText.vue";
import ResizedImg from "./components/ResizedImg.vue";
import Vue3Lottie from "vue3-lottie";

import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App).use(router, Vue3Lottie);

app.component("image-game", ImageGame);
app.component("image-container", ImageContainer);
app.component("vue-countdown", VueCountdown);
app.component("videoPlayer", Video);
app.component("sideInfo", SideInfo);
app.component("marmoset", MarmosetViewer);
app.component("expandingText", ExpandingText);
app.component("resizedImg", ResizedImg);

app.mount("#app");
