<template>
  <RouterLink
    to="/"
    class="w-full flex items-center text-white gap-x-2 sm:text-lg underlined-link"
    style="width: fit-content"
  >
    <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
    Back to Home
  </RouterLink>
  <div class="flex flex-col items-center">
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
    >
      Indiana Jones and the Great Circle <br />
      Art Blast
    </div>
    <ExpandingText :text="text"></ExpandingText>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 sm:gap-4"
    >
      <div v-for="project in projects" :key="project.id">
        <RouterLink
          :to="`/projects/indiana-jones-art-blast/${project.slug}`"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>{{ project.title }}</span>
            </div>
          </div>
          <img
            :src="`https://directus-production-8a29.up.railway.app/assets/${project.thumbnail}`"
            class="rounded-2xl"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ExpandingText from "../components/ExpandingText.vue";
const text = ref("");

const projects = ref([]);

onMounted(async () => {
  const res = await fetch(
    `https://directus-production-8a29.up.railway.app/items/projects?filter[parent_project][_eq]=2`
  );
  const json = await res.json();
  projects.value = json.data;
  console.log(projects.value);
});
</script>
<style>
.project-container-jones {
  position: relative;
  border-radius: 16px;
  aspect-ratio: 1/1;
}
.background-overlay-jones {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.project-container-jones:hover {
  .background-overlay-jones {
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.08049340341605393) 26%,
      rgba(0, 0, 0, 0.8003813585981268) 69%,
      rgba(0, 0, 0, 0.9460396219034489) 88%
    );
  }
}
</style>
