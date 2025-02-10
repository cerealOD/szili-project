<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="order-1 lg:order-0 flex flex-col lg:mr-20 2xl:mr-64">
      <div class="mb-16">
        <div class="text-white text-2xl font-medium underline mb-12">
          About me
        </div>
        <div class="lg:text-lg/7 text-white" style="max-width: 1100px">
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
          Work history
        </div>
        <div
          class="rounded-2xl bg-menu-gray p-6 flex flex-col sm:flex-row gap-x-8 mb-4"
        >
          <div class="flex-none">
            <img
              :src="require('../assets/jones-cover.jpg')"
              width="150"
              class="rounded-xl flex-none mb-4 sm:mb-0"
            />
          </div>
          <div class="flex flex-col text-white">
            <div
              class="flex flex-col 2xl:flex-row 2xl:items-center justify-between mb-4"
            >
              <span class="order-1 2xl:order-0 font-bold text-lg lg:text-2xl"
                >Indiana Jones and the Great Circle</span
              >
              <div
                class="order-0 2xl:order-1 rounded-lg bg-gray p-2 text-sm font-semibold text-green whitespace-nowrap mb-2 2xl:mb-0"
                style="width: fit-content"
              >
                2023 - present
              </div>
            </div>
            <div class="font-medium text-lg mb-1">
              3D Environment Artist at Treehouse Ninjas
            </div>
            <div class="flex items-center gap-x-1 mb-8">
              <img :src="'/icons/globe.svg'" class="flex-none" />
              Budapest, Hungary
            </div>
            <div>
              <div class="pb-4">Crafting story-driven worlds for AAA games</div>
              <ul>
                <li>
                  Responsible for complete environments from initial blockout
                  phase until the final touches, including building the
                  necessary elements from modules to unique assets, props and
                  their complete integration into the engine
                </li>
                <li>
                  Continous collaboration with other developer teams to achieve
                  production goals
                </li>
                <li>Work in team or as an invidual on specific tasks</li>
                <li>
                  Polish imperfections on the level of small details and review
                  final areas
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="rounded-2xl bg-menu-gray p-6 flex flex-col sm:flex-row gap-x-8"
        >
          <div class="flex-none">
            <img
              :src="require('../assets/descenders-cover.jpg')"
              width="150"
              class="rounded-xl mb-4 sm:mb-0"
            />
          </div>
          <div class="flex flex-col text-white w-full">
            <div
              class="flex flex-col 2xl:flex-row 2xl:items-center justify-between mb-4"
            >
              <span class="order-1 2xl:order-0 font-bold text-lg lg:text-2xl"
                >Descenders Next</span
              >
              <div
                class="order-0 2xl:order-1 rounded-lg bg-gray p-2 text-sm font-semibold text-green whitespace-nowrap mb-2 2xl:mb-0"
                style="width: fit-content"
              >
                2022 - 2023
              </div>
            </div>
            <div class="font-semibold text-lg mb-1">
              Junior 3D Character Artist at RageSquid
            </div>
            <div class="flex items-center gap-x-1 mb-8">
              <img :src="'/icons/globe.svg'" class="flex-none" />
              Tilburg, Netherlands
            </div>
            <div>
              <div class="pb-4">
                I have worked on their upcoming title - Descencers Next
              </div>
              <ul>
                <li>
                  Sculpted highpoly character models by following given
                  proportions to match existing animations
                </li>
                <li>
                  Created various props and implement them into the engine
                </li>
              </ul>
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
          class="flex items-center bg-gray p-2 rounded-lg gap-x-2 text-white"
        >
          <img :src="image" width="24" class="rounded-md" />
          <span>{{
            image.split("/")[image.split("/").length - 1].replaceAll(".png", "")
          }}</span>
        </div>
      </div>
    </div>
    <div class="order-0 lg:order-1">
      <sideInfo />
    </div>
  </div>
</template>

<script setup>
const tagsObject = import.meta.glob("/src/assets/logos/*.png");
const tagsPics = Object.keys(tagsObject).map((string) =>
  string.replace("/src/assets", "")
);
console.log(tagsPics);
</script>

<style>
li {
  list-style-type: disc;
  padding-bottom: 12px;
}
</style>
