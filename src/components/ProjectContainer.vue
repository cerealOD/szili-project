<template>
  <div class="w-full py-8">
    <Project
      :routeName="$route.name"
      :picsArray="picsArray"
      :videoArray="vidsArray"
    >
    </Project>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import Project from "../views/Project.vue";

const inariusObject = import.meta.glob("/src/assets/inarius/*.png");
const inariusPics = Object.keys(inariusObject);
const inariusVidObject = import.meta.glob("/src/assets/inarius/*.mp4");
const inariusVids = Object.keys(inariusVidObject);

const axeObject = import.meta.glob("/src/assets/viking-axe/*.png");
const axePics = Object.keys(axeObject);

const barbarianObject = import.meta.glob("/src/assets/barbarian/*.png");
const barbarianPics = Object.keys(barbarianObject);
const barbarianVidObject = import.meta.glob("/src/assets/barbarian/*.mp4");
const barbarianVids = Object.keys(barbarianVidObject);

const jonesObject = import.meta.glob("/src/assets/indiana-jones/*");

const route = useRoute();
const currentRouteName = computed(() => route.name);
const picsArray = computed(() => {
  if (currentRouteName.value == "barbarian") {
    return barbarianPics;
  }
  if (currentRouteName.value == "axe") {
    return axePics;
  }
  if (currentRouteName.value == "inarius") {
    return inariusPics;
  }
});

const vidsArray = computed(() => {
  if (currentRouteName.value == "barbarian") {
    return barbarianVids;
  }
  if (currentRouteName.value == "inarius") {
    return inariusVids;
  }
});

// console.log(vidsArray.value);
</script>
