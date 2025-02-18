<template>
  <div class="flex flex-col">
    <div class="mb-16">
      <div class="text-white text-2xl font-medium underline mb-12">
        About me
      </div>
      <div class="lg:text-lg/7 text-white" style="max-width: 1100px">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
    <div class="mb-16">
      <div class="text-white text-2xl font-medium underline mb-12">
        Work history
      </div>
      <div
        class="rounded-2xl bg-menu-gray p-6 flex flex-col lg:flex-row sm:gap-x-16 2xl:gap-x-64 mb-4"
      >
        <div class="flex flex-col text-white lg:w-1/2 2xl:w-2/3">
          <div class="flex flex-col mb-2">
            <span class="font-bold text-lg lg:text-2xl lg:pt-4 mb-2">
              3D Environment Artist at Treehouse Ninjas</span
            >
            <div
              class="rounded-lg bg-gray p-2 text-sm font-semibold text-green whitespace-nowrap mb-2 2xl:mb-0"
              style="width: fit-content"
            >
              2023 - present
            </div>
          </div>

          <div class="flex items-center gap-x-1 mb-8">
            <img :src="'/icons/globe.svg'" class="flex-none" />
            Budapest, Hungary
          </div>
          <div>
            <div class="pb-4">Crafting story-driven worlds for AAA games</div>
            <ul class="ml-6">
              <li>
                Responsible for complete environments from initial blockout
                phase until the final touches, including building the necessary
                elements from modules to unique assets, props and their complete
                integration into the engine
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
        <div
          class="flex flex-col text-white bg-gray rounded-xl p-4 mt-4 lg:mt-0 flex-none lg:w-1/2 2xl:w-1/3"
          style="height: fit-content"
        >
          <span class="font-bold text-lg lg:text-2xl mb-4">Main Project</span>
          <div class="flex flex-col sm:flex-row gap-x-4">
            <div class="flex-none">
              <img
                :src="require('../assets/jones-cover.jpg')"
                class="rounded-xl flex-none mb-4 sm:mb-0 w-[150px]"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-semibold text-lg lg:text-xl mb-4"
                >Indiana Jones and The Great Circle</span
              >
              <span class="mb-4 font-medium">Release date: 9 Dec, 2024</span>
              <div class="flex items-center gap-x-1 mb-2">
                <img
                  :src="require('/icons/metacritic.svg')"
                  width="24"
                  class="rounded-xl"
                />
                <a
                  href="https://www.metacritic.com/game/indiana-jones-and-the-great-circle/"
                  class="hover:underline"
                  >Metacritic Score: 86</a
                >
              </div>
              <div class="flex items-center gap-x-1">
                <img
                  :src="require('/icons/steam.svg')"
                  width="24"
                  class="rounded-xl"
                />
                <a
                  href="https://store.steampowered.com/app/2677660/Indiana_Jones_and_the_Great_Circle/"
                  class="hover:underline"
                  >Steam Store</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="rounded-2xl bg-menu-gray p-6 flex flex-col lg:flex-row sm:gap-x-16 2xl:gap-x-64 mb-4"
      >
        <div class="flex flex-col text-white lg:w-1/2 2xl:w-2/3">
          <div class="flex flex-col mb-2">
            <span class="font-bold text-lg lg:text-2xl lg:pt-4 mb-2">
              Junior 3D Character Artist at RageSquid</span
            >
            <div
              class="rounded-lg bg-gray p-2 text-sm font-semibold text-green whitespace-nowrap mb-2 2xl:mb-0"
              style="width: fit-content"
            >
              2022 - 2023
            </div>
          </div>

          <div class="flex items-center gap-x-1 mb-8">
            <img :src="'/icons/globe.svg'" class="flex-none" />
            Tilburg, Netherlands
          </div>
          <div>
            <div class="pb-4">
              I have worked on their upcoming title - Descencers Next
            </div>
            <ul class="ml-6">
              <li>
                Sculpted highpoly character models by following given
                proportions to match existing animations
              </li>
              <li>Created various props and implement them into the engine</li>
            </ul>
          </div>
        </div>
        <div
          class="flex flex-col text-white bg-gray rounded-xl p-4 mt-4 lg:mt-0 flex-none lg:w-1/2 2xl:w-1/3"
          style="height: fit-content"
        >
          <span class="font-bold text-lg lg:text-2xl mb-4">Main Project</span>
          <div class="flex flex-col sm:flex-row gap-x-4">
            <div class="flex-none">
              <img
                :src="require('../assets/descenders-cover.jpg')"
                class="rounded-xl flex-none mb-4 sm:mb-0 w-[150px]"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-semibold text-lg lg:text-xl mb-4"
                >Descenders Next</span
              >
              <span class="mb-4 font-medium">Release date: 9 Dec, 2024</span>
              <!-- <div class="flex items-center gap-x-1 mb-2">
                <img
                  :src="require('/icons/metacritic.svg')"
                  width="24"
                  class="rounded-xl mb-4 sm:mb-0"
                />
                <a
                  href="https://www.metacritic.com/game/indiana-jones-and-the-great-circle/"
                  class="hover:underline"
                  >Metacritic Score: 86</a
                >
              </div> -->
              <div class="flex items-center gap-x-1">
                <img
                  :src="require('/icons/steam.svg')"
                  width="24"
                  class="rounded-xl"
                />
                <a
                  href="https://store.steampowered.com/app/2375530/Descenders_Next/"
                  class="hover:underline"
                  >Steam Store</a
                >
              </div>
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
        v-for="image in logoPics"
        :key="image"
        class="flex items-center bg-gray p-2 rounded-lg gap-x-2 text-white"
      >
        <img :src="'logos/' + image + '.png'" width="24" class="rounded-md" />
        <span>{{ image }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const logoPics = ref([
  "3ds Max",
  "Blender",
  "Hansoft",
  "idTech",
  "Mari",
  "Marmoset Toolbag",
  "Marvelous Designer",
  "Maya",
  "MODO",
  "Perforce",
  "Photoshop",
  "RizomUV",
  "Substance 3D Designer",
  "Substance 3D Painter",
  "Unity",
  "Unreal Engine",
  "ZBrush",
]);
// onMounted(() => {
//   fetch("/api/logos")
//     .then((response) => response.json())
//     .then((data) => {
//       logoPics.value = data;
//     })
//     .catch((error) => {
//       console.error("Error fetching icons:", error);
//     });
// });
</script>

<style>
li {
  list-style-type: disc;
  padding-bottom: 12px;
}
</style>
