<template>
  <div class="w-full py-8">
    <Project
      :routeName="$route.params.slug"
      :picsArray="picsArray"
      :jones="true"
    >
    </Project>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import Project from "../views/Project.vue";

const iraqObject = import.meta.glob("/src/assets/indiana-jones/iraq/*.png");
const iraqPics = Object.keys(iraqObject);
const nightmare1Object = import.meta.glob(
  "/src/assets/indiana-jones/nightmare-vol-1/*.png"
);
const nightmare1Pics = Object.keys(nightmare1Object);
const nightmare2Object = import.meta.glob(
  "/src/assets/indiana-jones/nightmare-vol-2/*.png"
);
const nightmare2Pics = Object.keys(nightmare2Object);
const shanghaiObject = import.meta.glob(
  "/src/assets/indiana-jones/shanghai/*.png"
);
const shanghaiPics = Object.keys(shanghaiObject);
const sukhothaiObject = import.meta.glob(
  "/src/assets/indiana-jones/sukhothai/*.png"
);
const sukhothaiPics = Object.keys(sukhothaiObject);
const tree1Object = import.meta.glob(
  "/src/assets/indiana-jones/treehouse-vol-1/*.png"
);
const tree1Pics = Object.keys(tree1Object);
const tree2Object = import.meta.glob(
  "/src/assets/indiana-jones/treehouse-vol-2/*.png"
);
const tree2Pics = Object.keys(tree2Object);
const vaticanObject = import.meta.glob(
  "/src/assets/indiana-jones/vatican/*.png"
);
const vaticanPics = Object.keys(vaticanObject);

const route = useRoute();
const currentRouteName = computed(() => route.params.slug);
const picsArray = computed(() => {
  if (currentRouteName.value == "iraq") {
    return iraqPics;
  }
  if (currentRouteName.value == "nightmare-vol-1") {
    return nightmare1Pics;
  }
  if (currentRouteName.value == "nightmare-vol-2") {
    return nightmare2Pics;
  }
  if (currentRouteName.value == "shanghai") {
    return shanghaiPics;
  }
  if (currentRouteName.value == "sukhothai") {
    return sukhothaiPics;
  }
  if (currentRouteName.value == "treehouse-vol-1") {
    return tree1Pics;
  }
  if (currentRouteName.value == "treehouse-vol-2") {
    return tree2Pics;
  }
  if (currentRouteName.value == "vatican") {
    return vaticanPics;
  }
});

console.log(currentRouteName.value);
</script>
