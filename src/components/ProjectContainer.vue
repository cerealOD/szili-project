<template>
  <div class="w-full">
    <Project :routeName="$route.params.slug" :projectFiles="projectFiles">
    </Project>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import Project from "../views/Project.vue";

const route = useRoute();
const currentRouteName = computed(() => route.params.slug);

const projectFiles = ref([]);

onMounted(() => {
  fetch("/content.json")
    .then((response) => response.json())
    .then((data) => {
      projectFiles.value = data[currentRouteName.value][0];
    });
});
</script>
