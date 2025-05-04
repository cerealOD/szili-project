<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="order-1 lg:order-0 flex flex-col w-full">
      <div
        class="text-2xl md:text-3.5xl font-semibold text-white col-span-4 mb-8"
      >
        Portfolio
      </div>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-4"
      >
        <div v-for="project in projects" :key="project.id">
          <RouterLink
            :to="`/projects/${project.slug}`"
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
        <RouterLink
          to="/projects/diablo-ii-environment-fan-art"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Diablo II Cinematic</span>
            </div>
          </div>
          <img
            :src="'/thumbnails/diablo_2_thumbnail.png'"
            class="rounded-2xl"
          />
        </RouterLink>
        <RouterLink
          to="projects/indiana-jones-art-blast"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Indiana Jones Art Blast</span>
            </div>
          </div>
          <img :src="'/thumbnails/indiana_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>
        <RouterLink
          to="/projects/the-rogue-angel-inarius"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>The Rogue Angel Inarius</span>
            </div>
          </div>
          <img :src="'/thumbnails/inarius_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>
        <RouterLink
          to="/projects/barbarian"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Barbarian</span>
            </div>
          </div>
          <img
            :src="'/thumbnails/barbarian_thumbnail.png'"
            class="rounded-2xl"
          />
        </RouterLink>
        <RouterLink
          to="/projects/double-turret-gun"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Double Turret Gun</span>
            </div>
          </div>
          <img
            :src="'/thumbnails/double_turret_gun_thumbnail.png'"
            class="rounded-2xl"
          />
        </RouterLink>
        <RouterLink
          to="projects/skull-bow"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Skull Bow</span>
            </div>
          </div>
          <img :src="'/thumbnails/bow_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>
        <RouterLink
          to="projects/borderlands-smg"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Borderlands SMG</span>
            </div>
          </div>
          <img :src="'/thumbnails/smg_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>
        <RouterLink
          to="projects/antique-iron"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Antique Iron</span>
            </div>
          </div>
          <img :src="'/thumbnails/iron_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>

        <RouterLink
          to="projects/viking-axe"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Viking Axe</span>
            </div>
          </div>
          <img :src="'/thumbnails/axe_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>

        <RouterLink
          to="projects/jeep"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Jeep</span>
            </div>
          </div>
          <img :src="'/thumbnails/jeep_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>
        <RouterLink
          to="projects/laser-controller"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Laser Controller</span>
            </div>
          </div>
          <img :src="'/thumbnails/laser_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>
        <RouterLink
          to="projects/diablo"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Diablo</span>
            </div>
          </div>
          <img :src="'/thumbnails/diablo_thumbnail.png'" class="rounded-2xl" />
        </RouterLink>
      </div>
    </div>
    <div class="order-0 lg:order-1">
      <sideInfo />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const projects = ref([]);

onMounted(async () => {
  const res = await fetch(
    "https://directus-production-8a29.up.railway.app/items/projects"
  );
  const json = await res.json();
  projects.value = json.data;
  console.log(projects.value);
});
</script>

<style>
.prof-pic {
  background-image: url("../assets/prof-pic.jpg");
}
</style>
