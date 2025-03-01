<template>
  <div class="flex flex-col items-center">
    <RouterLink
      v-if="!jones"
      to="/"
      class="w-full flex items-center text-white gap-x-2 sm:text-lg hover:underline"
    >
      <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
      Back to Home
    </RouterLink>
    <RouterLink
      v-if="jones"
      to="/projects/indiana-jones-art-blast"
      class="w-full flex items-center text-white gap-x-2 sm:text-lg hover:underline"
    >
      <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
      Back to Indiana Jones Art Blast
    </RouterLink>
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
      ref="titleContainer"
    ></div>
    <ExpandingText :text="text"></ExpandingText>

    <div v-show="loading" class="text-white text-xl">
      <video autoplay loop muted playsinline class="lottie-video">
        <source :src="'/loader2.webm'" type="video/webm" />
      </video>
    </div>
    <div v-show="loading" class="text-white text-xl tracking-wider">
      <div>
        {{
          loadedMediaCount !== 0 || totalMediaCount !== 0
            ? Math.round((loadedMediaCount / totalMediaCount) * 100)
            : "0"
        }}
        %
      </div>
    </div>

    <div v-show="!loading" v-for="file in projectFiles">
      <resizedImg
        v-if="file.includes('png')"
        :imgSrc="'/' + routeName + '/' + file"
        class="mb-4 lg:mb-8"
        @loaded="onMediaLoaded"
      />
      <videoPlayer
        v-if="file.includes('mp4')"
        :mp4="'/' + routeName + '/' + file"
        class="mb-4 lg:mb-8"
        @loaded="onMediaLoaded"
      />
      <marmoset
        v-if="file.includes('marmoset')"
        :fileName="routeName"
        class="mb-8"
        @loaded="onMediaLoaded"
      ></marmoset>
    </div>

    <div v-show="!loading" class="w-full mt-8">
      <span class="text-white font-semibold text-2xl">Software Used</span>
      <div class="flex gap-2 flex-wrap mt-8">
        <div
          v-for="software in softwares"
          :key="software"
          class="flex items-center bg-gray p-2 rounded-lg gap-x-2 text-white"
        >
          <img
            :src="'/logos/' + software + '.png'"
            width="24"
            class="rounded-md"
          />
          <span>{{ software }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, watchEffect } from "vue";
import ExpandingText from "../components/ExpandingText.vue";

const props = defineProps({
  routeName: String,
  projectFiles: Array,
  jones: Boolean,
});

const titleContainer = ref(null);
const softwares = ref([]);
const text = ref("");
const loading = ref(true);
const loadedMediaCount = ref(0); // Tracks the number of fully loaded media
const totalMediaCount = ref(0); // Total number of images, videos, and viewers to load

// Function to increment loaded media count
const onMediaLoaded = () => {
  loadedMediaCount.value++;
  // console.log("loadedmediacount" + loadedMediaCount.value);
};

watchEffect(() => {
  totalMediaCount.value = props.projectFiles.length;

  if (
    totalMediaCount.value > 0 &&
    loadedMediaCount.value >= totalMediaCount.value
  ) {
    loading.value = false;
    // console.log(loading.value);
  }
});

onMounted(() => {
  let jonesRoute = props.routeName.split("/")[1];
  fetch("/content.json")
    .then((response) => response.json())
    .then((data) => {
      if (props.jones) {
        titleContainer.value.textContent = data[jonesRoute][2];
        softwares.value = data[jonesRoute][3];
      } else {
        titleContainer.value.textContent = data[props.routeName][2];
        softwares.value = data[props.routeName][3];
      }
    });
  fetch("/content.json")
    .then((response) => response.json())
    .then((data) => {
      if (props.jones) {
        text.value = data[jonesRoute][1];
      } else {
        text.value = data[props.routeName][1].replace(/\/n/g, "<br><br>"); // Replace line breaks
      }
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
