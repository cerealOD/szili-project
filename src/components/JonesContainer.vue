<template>
  <div class="w-full py-8">
    <Project
      :routeName="'indiana-jones-artblast' + '/' + currentRouteName"
      :picsArray="projectPics"
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

onMounted(() => {
  fetch("/content.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 1; i <= data[currentRouteName.value][0]; i++) {
        projectPics.value.push(i + ".png");
      }
    });
});
</script>
