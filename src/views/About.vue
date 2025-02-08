<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="order-1 lg:order-0 flex flex-col lg:mr-20 2xl:mr-64">
      <div class="mb-16">
        <div class="text-white text-2xl font-medium underline mb-12">
          About me
        </div>
        <div class="lg:text-lg/7 text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div class="mb-16">
        <div class="text-white text-2xl font-medium underline mb-12">
          Productions
        </div>
        <div
          class="rounded-2xl bg-menu-gray p-6 flex flex-col sm:flex-row gap-x-8 mb-4"
        >
          <img
            :src="require('../assets/jones-cover.jpg')"
            width="150"
            class="rounded-xl flex-none mb-4 sm:mb-0"
          />
          <div class="flex flex-col">
            <span class="text-white font-bold text-lg lg:text-2xl mb-1"
              >Indiana Jones and the Great Circle</span
            >
            <span class="text-white lg:text-lg mb-4"
              >3D Environmenrt Artist Treehouse Ninjas</span
            >
            <span class="lg:text-lg font-bold text-white">2023 - 2024</span>
          </div>
        </div>
        <div
          class="rounded-2xl bg-menu-gray p-6 flex flex-col sm:flex-row gap-x-8"
        >
          <img
            :src="require('../assets/descenders-cover.jpg')"
            width="150"
            class="rounded-xl flex-none mb-4 sm:mb-0"
          />
          <div class="flex flex-col">
            <span class="text-white font-bold text-lg lg:text-2xl mb-1"
              >Descenders Next</span
            >
            <span class="text-white lg:text-lg mb-4">
              Junior 3D Character Artist RageSquid</span
            >
            <span class="lg:text-lg font-bold text-white">2022 - 2023</span>
          </div>
        </div>
      </div>
      <div class="mb-16">
        <div class="text-white text-2xl font-medium underline mb-12">
          Work history
        </div>
        <div class="flex flex-col gap-y-8">
          <div>
            <div class="text-lg font-semibold text-white mb-4">
              January 2023 - Present
            </div>
            <div class="rounded-2xl bg-menu-gray p-6 text-white">
              <div class="font-semibold text-lg mb-1">
                3D Environment Artist at Treehouse Ninjas
              </div>
              <div class="flex items-center mb-8 gap-x-1">
                <img
                  :src="require('../assets/icons/globe.svg')"
                  class="flex-none"
                />
                Budapest, Hungary
              </div>
              <div class="">
                Crafting story-driven worlds for AAA games -Responsible for
                complete environments from initial blockout phase until the
                final touches, including building the necessary elements from
                modules to unique assets, props and their complete integration
                into the engine -Continous collaboration with other developer
                teams to achieve production goals -Work in team or as an
                invidual on specific tasks -Polish imperfections on the level of
                small details and review final areas
              </div>
            </div>
          </div>
          <div>
            <div class="text-lg font-semibold text-white mb-4">
              February 2022 - January 2023
            </div>
            <div class="rounded-2xl bg-menu-gray p-6 text-white">
              <div class="font-semibold text-lg mb-1">
                Junior 3D Character Artist at RageSquid
              </div>
              <div class="flex items-center mb-8 gap-x-1">
                <img
                  :src="require('../assets/icons/globe.svg')"
                  class="flex-none"
                />
                Tilburg, Netherlands
              </div>
              <div class="">
                I have worked on their upcoming title - Descencers Next
                -Sculpted highpoly character models by following given
                proportions to match existing animations -Created various props
                and implement them into the engine
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-white text-2xl font-medium underline mb-8">
        Software knowledge
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <div
          v-for="image in tagsPics"
          class="flex items-center bg-gray p-2 rounded-md gap-x-2 text-white"
        >
          <img :src="require(image)" width="24" class="rounded-md" />
          <span>{{
            image.split("/")[image.split("/").length - 1].replaceAll(".png", "")
          }}</span>
        </div>
      </div>
    </div>
    <div class="order-0 lg:order-1">
      <sideInfo class="" />
    </div>
  </div>
</template>

<script setup>
const tagsObject = import.meta.glob("/src/assets/logos/*.png");
const tagsPics = Object.keys(tagsObject);
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
