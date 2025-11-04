<template>
  <main>
    <section class="mb-16">
      <h1 class="text-white text-2xl md:text-3xl font-medium mb-12">
        About me
      </h1>
      <div
        class="lg:text-lg/7 text-white text-opacity-85"
        style="max-width: 1000px"
      >
        <p>
          Hi, my name is Szilard and I have spent the past 3 years creating
          visually rich and immersive game environments and characters that
          serve both narrative and gameplay. My experience includes working on
          various projects, ranging from indie to AAA titles, covering tasks
          such as character creation or tackling complete world-building,
          progressing from initial blockouts to fully set-dressed and polished
          locations. Having collaborated closely with a team of talented artists
          and developers I have developed a strong grasp of teamwork,
          communication, and attention to detail to deliver exceptional results.
        </p>
        <p>
          My passion for game art and development is reflected in the artistic
          and technical skills I possess. Being well-versed in industry-standard
          software such as Blender, 3ds Max, ZBrush, and Substance Painter, I
          leverage this knowledge to solve problems from multiple angles and
          offer versatile solutions. Moreover, I am continuously seeking
          opportunities to expand my expertise and stay up-to-date with the
          latest advancements in the field.
        </p>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-white text-2xl md:text-3xl font-medium mb-12">
        Work history
      </h2>
      <article class="work-story">
        <div class="work-story-text-container">
          <div class="flex flex-col mb-2">
            <h3 class="font-bold text-lg lg:text-2xl lg:pt-4 mb-2">
              3D Environment Artist at Treehouse Ninjas
            </h3>
            <span
              class="rounded-lg bg-gray p-2 text-sm font-semibold text-green whitespace-nowrap mb-2 2xl:mb-0"
              style="width: fit-content"
            >
              <time datetime="2023-01">Jan 2023</time>
              -
              <time datetime="2025-03">March 2025</time>
            </span>
          </div>

          <span class="flex items-center gap-x-1 mb-8">
            <img
              :src="'/icons/globe.svg'"
              class="flex-none"
              alt=""
              aria-hidden="true"
            />
            Budapest, Hungary
          </span>
          <div>
            <p class="pb-4 text-lg font-medium">
              Crafting story-driven worlds for AAA games
            </p>
            <ul class="ml-6 text-white text-opacity-85">
              <li>
                Shipped award-winning AAA title: Indiana Jones and the Great
                Circle, worked on several other projects
              </li>
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
        <div class="work-story-project-container">
          <h3 class="font-bold text-lg lg:text-2xl mb-4">Main Project</h3>
          <div class="flex flex-col sm:flex-row gap-x-4">
            <div class="flex-none">
              <img
                :src="require('../assets/jones-cover.jpg')"
                class="rounded-xl flex-none mb-4 sm:mb-0 w-[150px]"
                alt="Inidiana Jones and the Great Circle game poster"
              />
            </div>
            <div class="flex flex-col">
              <h4 class="font-medium text-lg lg:text-xl mb-4">
                Indiana Jones and the Great Circle
              </h4>
              <span class="mb-4 font-semibold text-white text-opacity-80"
                >Release date: 9 Dec, 2024</span
              >
              <div class="flex items-center gap-x-1 mb-2">
                <img
                  :src="require('/icons/metacritic.svg')"
                  width="24"
                  class="rounded-xl"
                  alt="Metacritic logo"
                />
                <a
                  href="https://www.metacritic.com/game/indiana-jones-and-the-great-circle/"
                  class="underlined-link"
                  >Metacritic Score: 86</a
                >
              </div>
              <div class="flex items-center gap-x-1">
                <img
                  :src="require('/icons/steam.svg')"
                  width="24"
                  class="rounded-xl"
                  alt="Steam logo"
                />
                <a
                  href="https://store.steampowered.com/app/2677660/Indiana_Jones_and_the_Great_Circle/"
                  class="underlined-link"
                  >Steam Store</a
                >
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="work-story">
        <div class="work-story-text-container">
          <div class="flex flex-col mb-2">
            <h3 class="font-bold text-lg lg:text-2xl lg:pt-4 mb-2">
              Junior 3D Character Artist at RageSquid
            </h3>
            <span
              class="rounded-lg bg-gray p-2 text-sm font-semibold text-green whitespace-nowrap mb-2 2xl:mb-0"
              style="width: fit-content"
            >
              <time datetime="2022-02">Feb 2022</time>
              -
              <time datetime="2023-01">Jan 2023</time>
            </span>
          </div>

          <span class="flex items-center gap-x-1 mb-8">
            <img
              :src="'/icons/globe.svg'"
              class="flex-none"
              alt=""
              aria-hidden="true"
            />
            Tilburg, Netherlands
          </span>
          <div>
            <div class="pb-4 text-lg font-medium">
              I have worked on their upcoming title - Descencers Next
            </div>
            <ul class="ml-6 text-white text-opacity-85">
              <li>
                Sculpted highpoly character models by following given
                proportions to match existing animations
              </li>
              <li>Created various props and implement them into the engine</li>
            </ul>
          </div>
        </div>
        <div class="work-story-project-container">
          <h3 class="font-bold text-lg lg:text-2xl mb-4">Main Project</h3>
          <div class="flex flex-col sm:flex-row gap-x-4">
            <div class="flex-none">
              <img
                :src="require('../assets/descenders-cover.jpg')"
                class="rounded-xl flex-none mb-4 sm:mb-0 w-[150px]"
                alt="Descenders game poster"
              />
            </div>
            <div class="flex flex-col">
              <h4 class="font-medium text-lg lg:text-xl mb-4">
                Descenders Next
              </h4>
              <span class="mb-4 font-semibold text-white text-opacity-80"
                >Release date: 9 Apr, 2025
              </span>
              <div class="flex items-center gap-x-1">
                <img
                  :src="require('/icons/steam.svg')"
                  width="24"
                  class="rounded-xl"
                  alt="Steam logo"
                />
                <a
                  href="https://store.steampowered.com/app/2375530/Descenders_Next/"
                  class="underlined-link"
                  >Steam Store</a
                >
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section>
      <h2 class="text-white text-2xl md:text-3xl font-medium mb-8">
        Software knowledge
      </h2>
      <div class="flex items-center gap-2 flex-wrap">
        <span
          v-for="software in softwares"
          :key="software"
          class="flex items-center bg-gray p-2 rounded-lg gap-x-2 text-white text-sm font-medium"
        >
          <img
            :src="'/logos/' + software + '.png'"
            width="24"
            class="rounded-md"
            :alt="software + ' logo'"
          />
          {{ software }}
        </span>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const softwares = ref([
  "3ds Max",
  "Adobe After Effects",
  "Blender",
  "Character Creator",
  "FiberShop",
  "GS CurveTools",
  "Hansoft",
  "Houdini",
  "idTech",
  "Mari",
  "Marmoset Toolbag",
  "Marvelous Designer",
  "Maya",
  "MODO",
  "Perforce",
  "Photoshop",
  "R3DS ZWrap",
  "RizomUV",
  "Substance 3D Designer",
  "Substance 3D Painter",
  "Substance 3D Sampler",
  "Unity",
  "Unreal Engine",
  "xNormal",
  "ZBrush",
]);
</script>

<style>
.work-story {
  @apply rounded-2xl bg-menu-gray p-6 flex flex-col lg:flex-row sm:gap-x-16 2xl:gap-x-64 mb-4;
}
.work-story-text-container {
  @apply flex flex-col text-white lg:w-1/2 2xl:w-2/3;
}
.work-story-project-container {
  @apply flex flex-col text-white bg-gray rounded-xl p-4 mt-4 lg:mt-0 flex-none lg:w-1/2 2xl:w-1/3;
  height: fit-content;
}
li {
  list-style-type: disc;
  padding-bottom: 12px;
}
</style>
