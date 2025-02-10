<template>
  <div class="lg:px-16">
    <a
      href="/"
      class="w-full flex items-center text-white gap-x-2 text-lg hover:underline"
    >
      <img :src="'/icons/back.svg'" />
      Back to Home
    </a>
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
    >
      Indiana Jones and The Great Circle
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
    >
      <RouterLink
        to="/projects/indiana-jones/iraq"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div
            class="absolute p-8 left-0 bottom-0 text-white text-xl font-bold"
          >
            <span>Barbarian</span>
          </div>
        </div>
        <img
          :src="require('../assets/thumbnails/jeep_thumbnail.png')"
          class="rounded-2xl"
        />
      </RouterLink>

      <RouterLink
        to="/projects/indiana-jones/nightmare-vol-1"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div
            class="absolute p-8 left-0 bottom-0 text-white text-xl font-bold"
          >
            <span>Barbarian</span>
          </div>
        </div>
        <img
          :src="require('../assets/thumbnails/jeep_thumbnail.png')"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones/nightmare-vol-2"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div
            class="absolute p-8 left-0 bottom-0 text-white text-xl font-bold"
          >
            <span>Barbarian</span>
          </div>
        </div>
        <img
          :src="require('../assets/thumbnails/jeep_thumbnail.png')"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones/shanghai"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div
            class="absolute p-8 left-0 bottom-0 text-white text-xl font-bold"
          >
            <span>Barbarian</span>
          </div>
        </div>
        <img
          :src="require('../assets/thumbnails/jeep_thumbnail.png')"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones/sukhothai"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div
            class="absolute p-8 left-0 bottom-0 text-white text-xl font-bold"
          >
            <span>Barbarian</span>
          </div>
        </div>
        <img
          :src="require('../assets/thumbnails/jeep_thumbnail.png')"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones/treehouse-vol-1"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div
            class="absolute p-8 left-0 bottom-0 text-white text-xl font-bold"
          >
            <span>Barbarian</span>
          </div>
        </div>
        <img
          :src="require('../assets/thumbnails/jeep_thumbnail.png')"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones/treehouse-vol-2"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div
            class="absolute p-8 left-0 bottom-0 text-white text-xl font-bold"
          >
            <span>Barbarian</span>
          </div>
        </div>
        <img
          :src="require('../assets/thumbnails/jeep_thumbnail.png')"
          class="rounded-2xl"
        />
      </RouterLink>
      <RouterLink
        to="/projects/indiana-jones/vatican"
        class="project-container-jones"
      >
        <div
          class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
          style="background-color: transparent; z-index: 4"
        >
          <div
            class="absolute p-8 left-0 bottom-0 text-white text-xl font-bold"
          >
            <span>Barbarian</span>
          </div>
        </div>
        <img
          :src="require('../assets/thumbnails/jeep_thumbnail.png')"
          class="rounded-2xl"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
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
