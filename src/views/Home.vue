<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="order-1 lg:order-0 flex flex-col w-full">
      <div class="text-3xl font-semibold text-white col-span-4 mb-8">
        Portfolio
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4"
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
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/bow">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/diablo">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/grav-gen">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/iron">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/jeep">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
            style="aspect-ratio: 1/1"
          ></div>
        </RouterLink>
        <RouterLink to="projects/laser">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
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
  background-image: url("../assets/barbarian/Barbarian_Thumnail_Fog_Szilard_Hazi.png");
}
.inarius-thumbnail {
  background-image: url("../assets/inarius/szilard_hazi_inarius_thumbnail_final.png");
}
.axe-thumbnail {
  background-image: url("../assets/viking-axe/axe_thumbnail_final.png");
}
.jones-thumbnail {
  background-image: url("../assets/indiana-jones/indiana_thumbnail.png");
}
</style>
