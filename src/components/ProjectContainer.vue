<template>
  <div class="w-full py-8">
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
const projectPics = ref([]);
const projectVids = ref([]);
const currentRouteName = computed(() => route.params.slug);
const hasMarmoset = ref(true);
onMounted(() => {
  if (currentRouteName.value == "barbarian") {
    fetch("/api/barbarian")
      .then((response) => response.json())
      .then((data) => {
        projectPics.value = data.filter((file) => file.includes("png"));
        projectVids.value = data.filter((file) => file.includes("mp4"));
      })
      .catch((error) => {
        console.error("Error fetching icons:", error);
      });
  }
  if (currentRouteName.value == "inarius") {
    fetch("/api/inarius")
      .then((response) => response.json())
      .then((data) => {
        projectPics.value = data.filter((file) => file.includes("png"));
        projectVids.value = data.filter((file) => file.includes("mp4"));
      })
      .catch((error) => {
        console.error("Error fetching icons:", error);
      });
  }
  // if (currentRouteName.value == "barbarian") {
  //   fetch("/api/barbarian")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       projectPics.value = data.filter((file) => file.includes("jpg"));
  //       projectVids.value = data.filter((file) => file.includes("mp4"));
  //       console.log(projectPics.value);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching icons:", error);
  //     });
  // }
  // if (currentRouteName.value == "barbarian") {
  //   fetch("/api/barbarian")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       projectPics.value = data.filter((file) => file.includes("jpg"));
  //       projectVids.value = data.filter((file) => file.includes("mp4"));
  //       console.log(projectPics.value);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching icons:", error);
  //     });
  // }
  // if (currentRouteName.value == "barbarian") {
  //   fetch("/api/barbarian")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       projectPics.value = data.filter((file) => file.includes("jpg"));
  //       projectVids.value = data.filter((file) => file.includes("mp4"));
  //       console.log(projectPics.value);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching icons:", error);
  //     });
  // }
});
</script>
