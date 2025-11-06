<template>
  <main>
    <Project :routeName="$route.params.slug" :project="project"> </Project>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useContentData } from "@/composables/useContentData.js";

import Project from "./Project.vue";

const route = useRoute();
const currentRouteName = computed(() => route.params.slug);

const project = ref({});

onMounted(async () => {
  const data = await useContentData();
  project.value = data[currentRouteName.value];
});
</script>
