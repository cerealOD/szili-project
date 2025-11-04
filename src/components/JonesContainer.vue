<template>
  <div class="w-full py-8">
    <Project
      :routeName="'indiana-jones-art-blast' + '/' + currentRouteName"
      :projectFiles="projectFiles"
      :jones="true"
    >
    </Project>
  </div>
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
      projectFiles.value = data[currentRouteName.value][0];
    });
});
</script>
