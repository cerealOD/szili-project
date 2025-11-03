import { createApp } from "vue";

import VueCountdown from "@chenfengyuan/vue-countdown";
import Video from "./components/Video.vue";
import SideInfo from "./components/SideInfo.vue";
import MarmosetViewer from "./components/MarmosetViewer.vue";
import ExpandingText from "./components/ExpandingText.vue";
import ResizedImg from "./components/ResizedImg.vue";

import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App).use(router);

app.component("vue-countdown", VueCountdown);
app.component("videoPlayer", Video);
app.component("sideInfo", SideInfo);
app.component("marmoset", MarmosetViewer);
app.component("expandingText", ExpandingText);
app.component("resizedImg", ResizedImg);

app.mount("#app");
