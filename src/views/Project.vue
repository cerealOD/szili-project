<template>
  <section>
    <div class="bg-black text-2xl font-bold py-16 text-center text-white">
      {{ $route.name }}
    </div>
    <div class="w-full p-8">
      <div v-if="$route.name == 'barbarian'">
        <div v-for="image in barbarianPics">
          <img :src="require(image)" class="pb-8" />
        </div>
        <Video
          :mp4="
            require('/src/assets/barbarian/Barbarian_Animation_Full_Szilard_Hazi.mp4')
          "
        />
      </div>
      <div v-if="$route.name == 'inarius'">
        <div v-for="image in inariusPics">
          <img :src="require(image)" class="pb-8" />
        </div>
      </div>
      <div v-if="$route.name == 'axe'">
        <div v-for="image in axePics">
          <img :src="require(image)" class="pb-8" />
        </div>
      </div>
      <div v-if="$route.name == 'jones'" class="grid grid-cols-2 gap-8">
        <RouterLink to="/indiana-jones/iraq">
          <div class="bg-black text-2xl font-bold py-16 text-center text-white">
            Iraq
          </div>
        </RouterLink>
        <RouterLink to="/indiana-jones/nightmare-1">
          <div class="bg-black text-2xl font-bold py-16 text-center text-white">
            Nightmare Vol. 1
          </div>
        </RouterLink>
        <RouterLink to="/indiana-jones/nightmare-2">
          <div class="bg-black text-2xl font-bold py-16 text-center text-white">
            Nightmare Vol. 2
          </div>
        </RouterLink>
        <RouterLink to="/indiana-jones/shanghai">
          <div class="bg-black text-2xl font-bold py-16 text-center text-white">
            Shanghai
          </div>
        </RouterLink>
        <RouterLink to="/indiana-jones/sukhothai">
          <div class="bg-black text-2xl font-bold py-16 text-center text-white">
            Sukhothai
          </div>
        </RouterLink>
        <RouterLink to="/indiana-jones/treehouse-1">
          <div class="bg-black text-2xl font-bold py-16 text-center text-white">
            Treehouse Vol. 1
          </div>
        </RouterLink>
        <RouterLink to="/indiana-jones/treehouse-2">
          <div class="bg-black text-2xl font-bold py-16 text-center text-white">
            Treehouse Vol. 2
          </div>
        </RouterLink>
        <RouterLink to="/indiana-jones/vatican">
          <div class="bg-black text-2xl font-bold py-16 text-center text-white">
            Vatican
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Video from "../components/Video.vue";

const router = useRouter();
const route = useRoute();

const inariusObject = import.meta.glob("/src/assets/inarius/*.png");
const inariusPics = Object.keys(inariusObject);
const axeObject = import.meta.glob("/src/assets/viking-axe/*.png");
const axePics = Object.keys(axeObject);
const barbarianObject = import.meta.glob("/src/assets/barbarian/*.png");
const barbarianPics = Object.keys(barbarianObject);
const jonesObject = import.meta.glob("/src/assets/indiana-jones/*");
console.log(jonesObject);
</script>
