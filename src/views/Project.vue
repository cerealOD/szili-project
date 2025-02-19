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
      href="/projects/indiana-jones-artblast"
      class="w-full flex items-center text-white gap-x-2 sm:text-lg hover:underline"
    >
      <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
      Back to Indiana Jones and The Great Circle
    </a>
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
      ref="titleContainer"
    ></div>
    <div
      class="md:text-lg lg:text-xl font-light text-white lg:px-32 xl:px-40 2xl:px-64 expanding-text max-h-40 overflow-hidden"
      :class="!expanded ? 'add-mask' : ''"
      id="expanding-div"
    >
      <div id="intro-text" ref="introText"></div>
    </div>
    <button
      class="pt-8 text-white flex items-center gap-x-1"
      @click="setExpanded"
      ref="expandButton"
    >
      <img :src="expanded ? '/icons/up.svg' : '/icons/down.svg'" />
      {{ expanded ? "Read Less" : "Read More" }}
    </button>
    <img
      v-for="image in picsArray"
      :src="'/' + routeName + '/' + image"
      class="rounded-3xl mb-8 mt-16"
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
import { ref, onUpdated, nextTick, onMounted } from "vue";
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
const expandButton = ref(null);
const titleContainer = ref(null);
const introTextHeight = ref(Number);

const setExpanded = () => {
  let expanding = document.getElementById("expanding-div");
  !expanded.value
    ? (expanding.style.maxHeight = `${introTextHeight.value}` + "px")
    : (expanding.style.maxHeight = "160px");
  expanded.value ? (expanded.value = false) : (expanded.value = true);
};

onMounted(() => {
  if (introText.value) {
    fetch("/content.json")
      .then((response) => response.json())
      .then((data) => {
        if (props.jones) {
          let jonesRoute = props.routeName.split("/")[1];
          titleContainer.value.textContent = data[jonesRoute][3];
          introText.value.textContent = data[jonesRoute][2];
        } else {
          titleContainer.value.textContent = data[props.routeName][3];
          introText.value.textContent = data[props.routeName][2];
        }
      })
      .then(() => {
        introTextHeight.value = introText.value.offsetHeight;
        console.log(introTextHeight.value);
        if (introTextHeight.value < 160) {
          expanded.value = true;
          expandButton.value.style.display = "none";
        }
      });
  }
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
