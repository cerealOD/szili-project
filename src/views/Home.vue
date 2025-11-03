<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <section class="order-1 lg:order-0 flex flex-col w-full">
      <h1 class="text-2xl md:text-3xl font-semibold text-white col-span-4 mb-8">
        Portfolio
      </h1>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-4"
      >
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
              <h2>Diablo II Cinematic</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/diablo_2_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
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
              <h2>Indiana Jones Art Blast</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/indiana_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
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
              <h2>The Rogue Angel Inarius</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/inarius_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
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
              <h2>Barbarian</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/barbarian_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
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
              <h2>Double Turret Gun</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/double_turret_gun_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
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
              <h2>Skull Bow</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/bow_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
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
              <h2>Borderlands SMG</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/smg_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
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
              <h2>Antique Iron</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/iron_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
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
              <h2>Viking Axe</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/axe_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
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
              <h2>Jeep</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/jeep_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
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
              <h2>Laser Controller</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/laser_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
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
              <h2>Diablo</h2>
            </div>
          </div>
          <img
            :src="'/thumbnails/diablo_thumbnail.png'"
            class="rounded-2xl"
            loading="lazy"
            alt="Project thumbnail"
          />
        </RouterLink>
      </div>
    </section>
    <section class="order-0 lg:order-1">
      <sideInfo />
    </section>
  </div>
</template>

<script setup></script>

<style>
.prof-pic {
  background-image: url("../assets/prof-pic.jpg");
}
</style>
