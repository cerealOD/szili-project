<template>
  <main>
    <Project :routeName="$route.params.slug" :projectFiles="projectFiles">
    </Project>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import Project from "./Project.vue";

const route = useRoute();
const currentRouteName = computed(() => route.params.slug);

const projectFiles = ref([]);

onMounted(() => {
  fetch("/content.json")
    .then((response) => response.json())
    .then((data) => {
      projectFiles.value = data[currentRouteName.value]["files"];
    });
});
</script>
