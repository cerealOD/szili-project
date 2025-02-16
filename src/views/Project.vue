<template>
  <div class="flex flex-col items-center">
    <a
      v-if="!jones"
      href="/"
      class="w-full flex items-center text-white gap-x-2 sm:text-lg hover:underline"
    >
      <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
      Back to Home
    </a>
    <a
      v-if="jones"
      href="/projects/indiana-jones"
      class="w-full flex items-center text-white gap-x-2 sm:text-lg hover:underline"
    >
      <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
      Back to Indiana Jones and The Great Circle
    </a>
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
    >
      {{ routeName }}
    </div>
    <div
      class="md:text-lg lg:text-xl font-light text-white lg:px-32 xl:px-40 2xl:px-64 expanding-text max-h-40 overflow-hidden"
      :class="!expanded ? 'add-mask' : ''"
      id="expanding-div"
    >
      <div id="intro-text" ref="introText">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
    </div>
    <button
      class="pt-8 pb-16 text-white flex items-center gap-x-1"
      @click="setExpanded"
    >
      <!-- <img v-if="!expanded" :src="'/icons/down.svg'" /> -->
      <img :src="expanded ? '/icons/up.svg' : '/icons/down.svg'" />
      {{ expanded ? "Read Less" : "Read More" }}
    </button>
    <img
      v-for="image in picsArray"
      :src="'/' + routeName + '/' + image"
      class="rounded-3xl mb-8"
    />

    <videoPlayer
      v-for="video in videoArray"
      :mp4="'/' + routeName + '/' + video"
      class="mb-8"
    />
    <marmoset v-if="hasMarmoset" :fileName="routeName" class="mb-8"></marmoset>
    <span class="text-white font-semibold text-2xl w-full mb-8"
      >Software Used</span
    >
    <div class="text-white flex items-center w-full gap-x-2"></div>
  </div>
</template>

<script setup>
import { ref, onUpdated, nextTick } from "vue";
// import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  routeName: String,
  picsArray: Array,
  videoArray: Array,
  jones: Boolean,
  hasMarmoset: Boolean,
});

const expanded = ref(false);
const introText = ref(null);
const introTextHeight = ref(Number);

const setExpanded = () => {
  let expanding = document.getElementById("expanding-div");
  !expanded.value
    ? (expanding.style.maxHeight = `${introTextHeight.value}` + "px")
    : (expanding.style.maxHeight = "160px");
  expanded.value ? (expanded.value = false) : (expanded.value = true);
};

onUpdated(() => {
  nextTick(() => {
    introTextHeight.value = introText.value.offsetHeight;
    // console.log(introTextHeight.value);
  });
});
</script>
<style>
.expanding-text {
  transition: max-height 0.4s cubic-bezier(0.25, 0.85, 0.55, 1);
}
.expanding-text.add-mask {
  --mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0) 95%,
      rgba(0, 0, 0, 0) 0
    )
    100% 50% / 100% 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}
</style>
