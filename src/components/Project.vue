<template>
  <div class="min-h-[100vh]">
    <button
      @click="goBack"
      class="w-full flex items-center text-white gap-x-2 text-sm sm:text-base lg:text-lg underlined-link"
      style="width: fit-content"
    >
      <img
        :src="'/icons/back.svg'"
        class="w-6 sm:w-9"
        alt=""
        aria-hidden="true"
      />
      {{ jones ? "Back to Indiana Jones Art Blast" : "Back to Home " }}
    </button>
    <div class="flex flex-col items-center">
      <h1
        v-if="title"
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium py-10 md:py-12 lg:py-16text-center text-white"
      >
        {{ title }}
      </h1>
      <div
        v-else
        class="h-16 w-64 bg-gray-700 animate-pulse rounded-md my-16"
      ></div>

      <ExpandingText v-if="text" :text="text"></ExpandingText>

      <p
        v-if="routeName == 'double-turret-gun'"
        class="w-full text-sm sm:text-base md:text-lg lg:text-xl font-light text-white lg:px-32 xl:px-40 2xl:px-64 flex flex-col gap-y-2 mb-8"
      >
        This project is available on the link below with complete breakdown,
        source files, etc.:
        <a
          href="https://drive.google.com/file/d/17hi_S8exERHQezUEAz5RiOJSfAE2gFCZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-x-1 bg-gray p-2 rounded-lg text-white hover:bg-white hover:text-gray resume-download"
          style="width: fit-content"
          aria-label="Download Double Turret Gun project from Google Drive"
        >
          <img :src="'/icons/drive.svg'" width="20" alt="Google Drive logo" />
          <span
            class="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-left"
            >Download Project</span
          >
        </a>
      </p>

      <div
        v-show="loading"
        class="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl"
        role="status"
        aria-live="polite"
      >
        Loading gallery:
        <p class="tracking-wider inline">
          {{
            loadedMediaCount !== 0 || totalMediaCount !== 0
              ? Math.round((loadedMediaCount / totalMediaCount) * 100)
              : "0"
          }}%
        </p>
      </div>

      <videoPlayer
        v-if="routeName == 'diablo-ii-environment-fan-art'"
        v-show="!loading"
        :muted="false"
        :mp4="'https://prismatic-brioche-bc0903.netlify.app/diablo-ii-video.mp4'"
        class="mb-4 lg:mb-8"
        @loaded="onMediaLoaded"
      />

      <div class="flex flex-col items-center gap-y-4 lg:gap-y-8">
        <div v-for="file in projectFiles">
          <resizedImg
            v-show="!loading"
            v-if="file.includes('png')"
            :imgSrc="'/' + routeName + '/' + file"
            @loaded="onMediaLoaded"
          />
          <videoPlayer
            v-show="!loading"
            v-if="file.includes('mp4')"
            :mp4="'/' + routeName + '/' + file"
            @loaded="onMediaLoaded"
          />
          <marmoset
            v-show="!loading"
            v-if="file.includes('marmoset')"
            :fileName="routeName"
            @loaded="onMediaLoaded"
          ></marmoset>
        </div>
      </div>

      <div v-show="!loading" class="w-full mt-12 lg:mt-16">
        <h2 class="text-white font-semibold text-lg sm:text-xl lg:text-2xl">
          Software Used
        </h2>
        <div class="flex gap-2 flex-wrap mt-8">
          <div
            v-for="software in softwares"
            :key="software"
            class="flex items-center bg-gray p-2 rounded-lg gap-x-2 text-white text-sm lg:text-base"
          >
            <img
              :src="'/logos/' + software + '.png'"
              class="rounded-md w-4 lg:w-6"
              :alt="software + ' logo'"
            />
            <span>{{ software }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from "vue";
import ExpandingText from "../components/ExpandingText.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  routeName: String,
  project: Object,
  jones: Boolean,
});

const projectFiles = computed(() => props.project["files"]);
const text = computed(() => props.project["description"]);
const title = computed(() => props.project["title"]);
const softwares = computed(() => props.project["software"]);

const isMobile = ref(false);

// Refs for showing loading percentage
const loadedMediaCount = ref(0);
const totalMediaCount = ref(0);
const loading = ref(true);

const router = useRouter();

const onMediaLoaded = () => {
  loadedMediaCount.value++;
};

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    props.jones
      ? router.push("/")
      : router.push("/projects/indiana-jones-art-blast");
  }
};

watchEffect(() => {
  totalMediaCount.value = projectFiles.value?.length || 0;

  if (
    totalMediaCount.value > 0 &&
    loadedMediaCount.value >= totalMediaCount.value
  ) {
    loading.value = false;

    // If desktop, start videos as they scroll in
    if (!isMobile.value) {
      let lazyVideos = [...document.querySelectorAll(".project-video")];

      if ("IntersectionObserver" in window) {
        let lazyVideoObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (video) {
            if (video.isIntersecting) {
              video.target.play();
              // Remove class so it won't be selected later
              video.target.classList.remove("project-video");
              // Unobserve once already scrolled in
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });

        lazyVideos.forEach(function (lazyVideo) {
          lazyVideoObserver.observe(lazyVideo);
        });
      }
    }
  }
});

onMounted(async () => {
  // Check the device type
  isMobile.value = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
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
