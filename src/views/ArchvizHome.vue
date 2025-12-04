<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <main class="order-1 lg:order-0 flex flex-col w-full">
      <h1 class="text-2xl md:text-3xl font-semibold text-white col-span-4 mb-8">
        Projects
      </h1>
      <div class="flex flex-col gap-4 md:gap-8 lg:gap-6 xl:gap-8">
        <RouterLink
          v-for="(project, key) in projects"
          :key="key"
          :to="'/archviz/' + key"
          class="relative shadow-lg rounded-lg sm:rounded-xl xl:rounded-2xl transition-transform duration-200 ease-out hover:scale-[1.01] hover:shadow-2xl"
          style="aspect-ratio: 16/9"
        >
          <article>
            <figure>
              <img
                :src="imgSrc(key)"
                class="rounded-lg rounded-lg sm:rounded-xl xl:rounded-2xl w-full"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">{{ project["title"] }}</figcaption>
            </figure>
            <div
              class="absolute bottom-4 left-4 bg-menu-gray rounded-md xl:rounded-lg px-2 py-1.5 sm:px-4 sm:py-2 text-white/90 font-medium transition-all duration-300 ease-out overflow-hidden max-w-[18rem] group-hover:max-w-[26rem] text-xs xl:text-sm"
            >
              <h2 class="whitespace-nowrap">
                {{ project["title"] }}
              </h2>
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
  projects.value = data["archviz"];
});

const imgSrc = (key) => {
  const path = `/archviz/thumbnails/${key}.jpg`;
  const targetWidth = ref(0);
  if (import.meta.env.PROD) {
    if (window.innerWidth < 1280) {
      targetWidth.value = 1024;
    } else if (window.innerWidth < 1440) {
      targetWidth.value = 1920;
    } else {
      targetWidth.value = 2560;
    }
    return `/.netlify/images?url=${encodeURIComponent(path)}&w=${
      targetWidth.value
    }&q=100`;
  }

  return path;
};
</script>

<style>
.prof-pic {
  background-image: url("../assets/prof-pic.jpg");
}
</style>
