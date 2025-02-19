<template>
  <div class="w-full">
    <Project
      :routeName="$route.params.slug"
      :picsArray="projectPics"
      :videoArray="projectVids"
      :hasMarmoset="hasMarmoset"
    >
    </Project>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

import Project from "../views/Project.vue";

const route = useRoute();
const currentRouteName = computed(() => route.params.slug);

const projectPics = ref([]);
const projectVids = ref([]);

const hasMarmoset = ref(false);

onMounted(() => {
  hasMarmoset.value = [
    "viking-axe",
    "skull-bow",
    "antique-iron",
    "jeep",
    "borderlands-smg",
    "the-rogue-angel-inarius",
  ].includes(currentRouteName.value);

  fetch("/content.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 1; i <= data[currentRouteName.value][0]; i++) {
        projectPics.value.push(i + ".png");
      }
      for (let i = 1; i <= data[currentRouteName.value][1]; i++) {
        projectVids.value.push("vid" + i + ".mp4");
      }
    });
});
</script>
