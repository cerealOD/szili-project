<template>
  <main>
    <button
      @click="goBack"
      class="w-full flex items-center text-white gap-x-2 text-sm sm:text-base lg:text-lg underlined-link"
      style="width: fit-content"
    >
      <img
        :src="'/icons/back.svg'"
        class="w-6 sm:w-9"
        alt=""
        aria-hidden="true"
      />
      Back to Home
    </button>
    <div class="flex flex-col items-center">
      <h1
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium py-10 md:py-12 lg:py-16 text-center text-white"
      >
        Indiana Jones and the Great Circle <br />
        Art Blast
      </h1>
      <ExpandingText v-if="text" :text="text"></ExpandingText>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 sm:gap-4"
      >
        <RouterLink
          v-for="(project, key) in projects"
          :key="key"
          :to="'/projects/indiana-jones-art-blast/' + key"
          class="project-container"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/' + project['thumbnail'] + '.png'"
                class="rounded-2xl"
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
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ExpandingText from "../components/ExpandingText.vue";
import { useContentData } from "@/composables/useContentData.js";
import { useRouter } from "vue-router";

const text = ref("");
const projects = ref({});

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};

onMounted(async () => {
  const data = await useContentData();
  projects.value = data["indiana-jones-art-blast"]["sub-projects"];
  text.value = data["indiana-jones-art-blast"]["description"];
});

const replaceLineBreaks = (text) => {
  return text.replace(/\/n/g, "<br>");
};
</script>
