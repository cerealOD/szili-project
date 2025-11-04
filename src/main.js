import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import router from "./router";
import App from "./App.vue";

import VueCountdown from "@chenfengyuan/vue-countdown";
import Video from "./components/Video.vue";
import SideInfo from "./components/SideInfo.vue";
import MarmosetViewer from "./components/MarmosetViewer.vue";
import ExpandingText from "./components/ExpandingText.vue";
import ResizedImg from "./components/ResizedImg.vue";

import "./index.css";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);

app.component("vue-countdown", VueCountdown);
app.component("videoPlayer", Video);
app.component("sideInfo", SideInfo);
app.component("marmoset", MarmosetViewer);
app.component("expandingText", ExpandingText);
app.component("resizedImg", ResizedImg);

app.mount("#app");
