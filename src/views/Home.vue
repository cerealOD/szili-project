<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <main class="order-1 lg:order-0 flex flex-col w-full">
      <h1 class="text-2xl md:text-3xl font-semibold text-white col-span-4 mb-8">
        Portfolio
      </h1>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-4"
      >
        <RouterLink
          v-for="(project, key) in projects"
          :key="key"
          :to="'/projects/' + key"
          class="project-container"
          style="aspect-ratio: 1/1"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/' + project['thumbnail'] + '.png'"
                class="rounded-2xl"
                loading="lazy"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">{{ project["title"] }}</figcaption>
            </figure>
            <div
              class="background-overlay"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2 v-html="replaceLineBreaks(project['title'])"></h2>
              </div>
            </div>
          </article>
        </RouterLink>
      </div>
    </main>
    <aside class="order-0 lg:order-1">
      <sideInfo />
    </aside>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useContentData } from "@/composables/useContentData.js";

const projects = ref({});

onMounted(async () => {
  const data = await useContentData();
  projects.value = data;
});

const replaceLineBreaks = (text) => {
  return text.replace(/\/n/g, "<br>");
};
</script>

<style>
.prof-pic {
  background-image: url("../assets/prof-pic.jpg");
}
</style>
