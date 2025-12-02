<template>
  <main>
    <Project
      :routeName="'indiana-jones-art-blast' + '/' + currentRouteName"
      :project="project"
      :jones="true"
    >
    </Project>
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
  project.value =
    data["game-art"]["indiana-jones-art-blast"]["sub-projects"][
      currentRouteName.value
    ];
});
</script>
