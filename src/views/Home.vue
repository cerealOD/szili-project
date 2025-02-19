<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="order-1 lg:order-0 flex flex-col w-full">
      <div
        class="text-2xl md:text-3.5xl font-semibold text-white col-span-4 mb-8"
      >
        Portfolio
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
      >
        <RouterLink
          to="projects/indiana-jones-artblast"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>Indiana Jones Artblast</span>
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

<script setup></script>

<style>
.background-overlay {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.project-container:hover {
  .background-overlay {
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.08049340341605393) 26%,
      rgba(0, 0, 0, 0.8003813585981268) 69%,
      rgba(0, 0, 0, 0.9460396219034489) 88%
    );
  }
}
.prof-pic {
  background-image: url("../assets/prof-pic.jpg");
}
</style>
