<template>
  <main>
    <Project :routeName="$route.params.slug" :project="project"> </Project>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useContentData } from "@/composables/useContentData.js";

import Project from "./Project.vue";

const route = useRoute();
const currentRouteName = computed(() => route.params.slug);

const project = ref({});

onMounted(async () => {
  const currentRoute = route.fullPath.split("/")[1];
  const data = await useContentData();
  project.value =
    currentRoute == "game-art"
      ? data["game-art"][currentRouteName.value]
      : data["archviz"][currentRouteName.value];
});
</script>
