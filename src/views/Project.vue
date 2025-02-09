<template>
  <div class="flex flex-col items-center lg:px-16">
    <a
      v-if="!jones"
      href="/"
      class="w-full flex items-center text-white gap-x-2 text-lg hover:underline"
    >
      <img :src="require('../assets/icons/back.svg')" />
      Back to Home
    </a>
    <a
      v-if="jones"
      href="/projects/indiana-jones"
      class="w-full flex items-center text-white gap-x-2 text-lg hover:underline"
    >
      <img :src="require('../assets/icons/back.svg')" />
      Back to Indiana Jones and The Great Circle
    </a>
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
    >
      {{ routeName }}
    </div>
    <div
      class="md:text-lg lg:text-xl font-light pb-16 text-white lg:px-32 xl:px-40 2xl:px-64"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </div>
    <img
      v-for="image in picsArray"
      :src="require(image)"
      class="rounded-3xl mb-8"
    />
    <videoPlayer
      v-for="video in videoArray"
      :mp4="require(video)"
      class="mb-8"
    />
    <span class="text-white font-semibold text-2xl w-full mb-8"
      >Software Used</span
    >
    <div class="text-white flex items-center w-full gap-x-2">
      <a href="https://www.artstation.com/szilardhazi3d" class="cursor-pointer">
        <img :src="require('../assets/icons/artstation.svg')" width="32" />
      </a>
      <a
        href="https://www.linkedin.com/in/szilard-hazi-3d/"
        class="cursor-pointer"
      >
        <img :src="require('../assets/icons/linkedin.svg')" width="30"
      /></a>
      <a href="https://www.artstation.com/szilardhazi3d" class="cursor-pointer">
        <img :src="require('../assets/icons/artstation.svg')" width="32" />
      </a>
      <a
        href="https://www.linkedin.com/in/szilard-hazi-3d/"
        class="cursor-pointer"
      >
        <img :src="require('../assets/icons/linkedin.svg')" width="30"
      /></a>
      <a href="https://www.artstation.com/szilardhazi3d" class="cursor-pointer">
        <img :src="require('../assets/icons/artstation.svg')" width="32" />
      </a>
      <a
        href="https://www.linkedin.com/in/szilard-hazi-3d/"
        class="cursor-pointer"
      >
        <img :src="require('../assets/icons/linkedin.svg')" width="30"
      /></a>
      <a href="https://www.artstation.com/szilardhazi3d" class="cursor-pointer">
        <img :src="require('../assets/icons/artstation.svg')" width="32" />
      </a>
      <a
        href="https://www.linkedin.com/in/szilard-hazi-3d/"
        class="cursor-pointer"
      >
        <img :src="require('../assets/icons/linkedin.svg')" width="30"
      /></a>
      <a href="https://www.artstation.com/szilardhazi3d" class="cursor-pointer">
        <img :src="require('../assets/icons/artstation.svg')" width="32" />
      </a>
      <a
        href="https://www.linkedin.com/in/szilard-hazi-3d/"
        class="cursor-pointer"
      >
        <img :src="require('../assets/icons/linkedin.svg')" width="30"
      /></a>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  props: {
    routeName: String,
    picsArray: Array,
    videoArray: Array,
    jones: Boolean,
  },
};
</script>
