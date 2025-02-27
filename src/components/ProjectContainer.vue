<template>
  <div class="w-full">
    <Project :routeName="$route.params.slug" :projectFiles="projectFiles">
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

// const projectPics = ref([]);
// const projectVids = ref([]);
const projectFiles = ref([]);

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
      projectFiles.value = data[currentRouteName.value][0];
    });
});
</script>
