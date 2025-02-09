<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="order-1 lg:order-0 flex flex-col w-full">
      <div
        class="text-2xl md:text-3.5xl font-semibold text-white col-span-4 mb-8"
      >
        Portfolio
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
      >
        <RouterLink to="/projects/barbarian">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover barbarian-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="/projects/inarius">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover inarius-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/axe">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover axe-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/indiana-jones">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/borderlands">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover smg-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/bow">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover bow-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/diablo">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover diablo-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>

        <RouterLink to="projects/iron">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover iron-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/jeep">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jeep-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/laser">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover laser-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
      </div>
    </div>
    <div class="order-0 lg:order-1">
      <sideInfo />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
.prof-pic {
  background-image: url("../assets/prof-pic.jpg");
}
.barbarian-thumbnail {
  background-image: url("../assets/thumbnails/barbarian_thumbnail.png");
}
.inarius-thumbnail {
  background-image: url("../assets/thumbnails/inarius_thumbnail.png");
}
.axe-thumbnail {
  background-image: url("../assets/thumbnails/axe_thumbnail.png");
}
.jones-thumbnail {
  background-image: url("../assets/thumbnails/indiana_thumbnail.png");
}
.bow-thumbnail {
  background-image: url("../assets/thumbnails/bow_thumbnail.png");
}
.diablo-thumbnail {
  background-image: url("../assets/thumbnails/diablo_thumbnail.png");
}
.iron-thumbnail {
  background-image: url("../assets/thumbnails/iron_thumbnail.png");
}
.jeep-thumbnail {
  background-image: url("../assets/thumbnails/jeep_thumbnail.png");
}
.laser-thumbnail {
  background-image: url("../assets/thumbnails/laser_thumbnail.png");
}
.smg-thumbnail {
  background-image: url("../assets/thumbnails/smg_thumbnail.png");
}
</style>
