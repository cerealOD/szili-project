<template>
  <div class="w-full py-8">
    <Project
      :routeName="'indiana-jones' + '/' + currentRouteName"
      :picsArray="projectPics"
      :videoArray="projectVids"
      :jones="true"
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

onMounted(() => {
  fetch(`/api/indiana-jones/${currentRouteName.value}`)
    .then((response) => response.json())
    .then((data) => {
      projectPics.value = data.filter((file) => file.includes("png"));
      projectVids.value = data.filter((file) => file.includes("mp4"));
    })
    .catch((error) => {
      console.error("Error fetching icons:", error);
    });
});
</script>
