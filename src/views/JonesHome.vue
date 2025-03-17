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
      <RouterLink
        to="/projects/indiana-jones-art-blast/iraq"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div class="project-text">
            <span>Iraq</span>
          </div>
        </div>
        <img :src="'/thumbnails/iraq_thumbnail.png'" class="rounded-2xl" />
      </RouterLink>

      <RouterLink
        to="/projects/indiana-jones-art-blast/dream-vol-1"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div class="project-text">
            <span>Dream Vol. 1</span>
          </div>
        </div>
        <img
          :src="'/thumbnails/nightmare_1_thumbnail.png'"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones-art-blast/dream-vol-2"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div class="project-text">
            <span>Dream Vol. 2</span>
          </div>
        </div>
        <img
          :src="'/thumbnails/nightmare_2_thumbnail.png'"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones-art-blast/shanghai"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div class="project-text">
            <span>Shanghai</span>
          </div>
        </div>
        <img :src="'/thumbnails/shanghai_thumbnail.png'" class="rounded-2xl" />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones-art-blast/sukhothai"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div class="project-text">
            <span>Sukhothai</span>
          </div>
        </div>
        <img :src="'/thumbnails/sukhothai_thumbnail.png'" class="rounded-2xl" />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones-art-blast/treehouse-vol-1"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div class="project-text">
            <span>Treehouse Vol. 1</span>
          </div>
        </div>
        <img
          :src="'/thumbnails/treehouse_1_thumbnail.png'"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones-art-blast/treehouse-vol-2"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div class="project-text">
            <span>Treehouse Vol. 2</span>
          </div>
        </div>
        <img
          :src="'/thumbnails/treehouse_2_thumbnail.png'"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones-art-blast/vatican"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div class="project-text">
            <span>Vatican</span>
          </div>
        </div>
        <img :src="'/thumbnails/vatican_thumbnail.png'" class="rounded-2xl" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ExpandingText from "../components/ExpandingText.vue";
const text = ref("");

onMounted(() => {
  fetch("/content.json")
    .then((response) => response.json())
    .then((data) => {
      text.value = data["indiana-jones"][0].replace(/\/n/g, "<br><br>"); // Replace line breaks
    });
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
