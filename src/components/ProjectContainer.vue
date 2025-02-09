<template>
  <div class="w-full py-8">
    <Project
      :routeName="$route.params.slug"
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

const borderlandsObject = import.meta.glob("/src/assets/borderlands/*.png");
const borderlandsPics = Object.keys(borderlandsObject);

const bowObject = import.meta.glob("/src/assets/bow/*.png");
const bowPics = Object.keys(bowObject);
const bowVidObject = import.meta.glob("/src/assets/bow/*.mp4");
const bowVids = Object.keys(bowVidObject);

const diabloObject = import.meta.glob("/src/assets/diablo/*.png");
const diabloPics = Object.keys(diabloObject);

const gravObject = import.meta.glob("/src/assets/grav-gen/*.png");
const gravPics = Object.keys(gravObject);

const ironObject = import.meta.glob("/src/assets/iron/*.png");
const ironPics = Object.keys(ironObject);

const jeepObject = import.meta.glob("/src/assets/jeep/*.png");
const jeepPics = Object.keys(jeepObject);
const jeepVidObject = import.meta.glob("/src/assets/jeep/*.mp4");
const jeepVids = Object.keys(jeepVidObject);

const laserObject = import.meta.glob("/src/assets/laser/*.png");
const laserPics = Object.keys(laserObject);
const laserVidObject = import.meta.glob("/src/assets/laser/*.mp4");
const laserVids = Object.keys(laserVidObject);

const route = useRoute();
const currentRouteName = computed(() => route.params.slug);
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
  if (currentRouteName.value == "borderlands") {
    return borderlandsPics;
  }
  if (currentRouteName.value == "bow") {
    return bowPics;
  }
  if (currentRouteName.value == "diablo") {
    return diabloPics;
  }
  if (currentRouteName.value == "grav-gen") {
    return gravPics;
  }
  if (currentRouteName.value == "iron") {
    return ironPics;
  }
  if (currentRouteName.value == "jeep") {
    return jeepPics;
  }
  if (currentRouteName.value == "laser") {
    return laserPics;
  }
});

const vidsArray = computed(() => {
  if (currentRouteName.value == "barbarian") {
    return barbarianVids;
  }
  if (currentRouteName.value == "inarius") {
    return inariusVids;
  }
  if (currentRouteName.value == "bow") {
    return bowVids;
  }
  if (currentRouteName.value == "jeep") {
    return jeepVids;
  }
  if (currentRouteName.value == "laser") {
    return laserVids;
  }
});
</script>
