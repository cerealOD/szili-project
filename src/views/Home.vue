<template>
  <section>
    <div class="flex flex-row justify-between p-16">
      <div class="flex flex-col w-full">
        <div class="text-2xl font-bold text-white col-span-4 mb-4">
          Portfolio
        </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"
        >
          <RouterLink to="/barbarian">
            <div
              class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-red"
              style="aspect-ratio: 1/1"
            >
              Barbarian
            </div>
          </RouterLink>
          <RouterLink to="/inarius">
            <div
              class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-red"
              style="aspect-ratio: 1/1"
            >
              Inarius
            </div>
          </RouterLink>
          <RouterLink to="/axe">
            <div
              class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-red"
              style="aspect-ratio: 1/1"
            >
              Viking Axe
            </div>
          </RouterLink>
          <RouterLink to="/indiana-jones">
            <div
              class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-red"
              style="aspect-ratio: 1/1"
            >
              Indiana Jones
            </div>
          </RouterLink>
        </div>
      </div>

      <div
        class="bg-menu-gray rounded-2xl p-8 flex flex-col ml-8 items-center w-[380px]"
      >
        <div
          class="bg-center bg-no-repeat bg-cover h-40 w-40 rounded-full prof-pic mb-8"
        ></div>
        <span class="text-white text-3xl font-bold whitespace-nowrap mb-4">
          Szilard Hazi
        </span>
        <span class="text-white text-lg font-medium whitespace-nowrap mb-4">
          3D Environment & character art
        </span>
        <span
          class="text-white text-lg font-medium whitespace-nowrap mb-8 flex items-center gap-x-1"
        >
          <img :src="require('../assets/icons/globe.svg')" />
          Budapest, Hungary
        </span>
        <div class="text-white border-b border-solid border-white pb-8 mb-8">
          Hi, my name is Szilard, and I’m a passionate, self-taught 3D artist
          with over three years of industry experience, specializing in game
          environments and character art. For more details about my experience
          and work, please visit the About tab.
        </div>
        <div class="text-white text-left mb-8 w-full">Contact & Socials</div>
        <a
          href="mailto:szilard.hazi91@gmail.com"
          class="text-white hover:underline w-full mb-4 cursor-pointer"
        >
          szilard.hazi91@gmail.com
        </a>
        <div class="text-white flex items-center w-full gap-x-2">
          <a
            href="https://www.linkedin.com/in/szilard-hazi-3d/"
            class="cursor-pointer"
          >
            <img :src="require('../assets/icons/linkedin.svg')" width="30"
          /></a>
          <a
            href="https://www.artstation.com/szilardhazi3d"
            class="cursor-pointer"
          >
            <img :src="require('../assets/icons/artstation.svg')" width="32" />
          </a>
        </div>
      </div>
    </div>
  </section>
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
</style>
