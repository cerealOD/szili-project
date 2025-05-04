<template>
  <RouterLink
    v-if="!jones"
    to="/"
    class="w-full flex items-center text-white gap-x-2 sm:text-lg underlined-link"
    style="width: fit-content"
  >
    <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
    Back to Home
  </RouterLink>
  <RouterLink
    v-if="jones"
    to="/projects/indiana-jones-art-blast"
    class="w-full flex items-center text-white gap-x-2 sm:text-lg underlined-link"
    style="width: fit-content"
  >
    <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
    Back to Indiana Jones Art Blast
  </RouterLink>
  <div class="flex flex-col items-center">
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
    >
      {{ project.title }}
    </div>
    <ExpandingText :text="project.description"></ExpandingText>
    <div
      v-if="routeName == 'double-turret-gun'"
      class="w-full md:text-lg lg:text-xl font-light text-white lg:px-32 xl:px-40 2xl:px-64 flex flex-col gap-y-2 mb-8"
    >
      This project is available on the link below with complete breakdown,
      source files, etc.:
      <a
        href="https://drive.google.com/file/d/17hi_S8exERHQezUEAz5RiOJSfAE2gFCZ/view?usp=sharing"
        target="_blank"
        class="flex items-center gap-x-1 bg-gray p-2 rounded-lg text-white hover:bg-white hover:text-gray resume-download"
        style="width: fit-content"
        @click="downLoadPdf"
      >
        <img :src="'/icons/drive.svg'" width="20" />
        <div class="text-sm font-medium text-left">Download Project</div>
      </a>
    </div>

    <div class="project-content" v-html="project.content"></div>

    <!-- <marmoset :fileName="slug" class="mb-8" @loaded="onMediaLoaded"></marmoset> -->

    <!-- <dotlottie-player
      src="/circle.lottie"
      v-show="loading"
      background="transparent"
      speed="1"
      style="width: 150px; height: 150px"
      loop
      autoplay
    ></dotlottie-player> -->

    <!-- <div v-show="loading" class="text-white text-xl tracking-wider">
      <div>
        {{
          loadedMediaCount !== 0 || totalMediaCount !== 0
            ? Math.round((loadedMediaCount / totalMediaCount) * 100)
            : "0"
        }}
        %
      </div>
    </div> -->

    <!-- <videoPlayer
      v-if="routeName == 'diablo-ii-environment-fan-art'"
      v-show="!loading"
      :mp4="'https://prismatic-brioche-bc0903.netlify.app/diablo-ii-video.mp4'"
      class="mb-4 lg:mb-8"
      @loaded="onMediaLoaded"
    /> -->

    <!-- <div v-for="file in projectFiles">
      <resizedImg
        v-show="!loading"
        v-if="file.includes('png')"
        :imgSrc="'/' + routeName + '/' + file"
        class="mb-4 lg:mb-8"
        @loaded="onMediaLoaded"
      />
      <videoPlayer
        v-show="!loading"
        v-if="file.includes('mp4')"
        :mp4="'/' + routeName + '/' + file"
        class="mb-4 lg:mb-8"
        @loaded="onMediaLoaded"
      />

    </div> -->

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
import { ref, onMounted, watchEffect, nextTick, watch } from "vue";
import ExpandingText from "../components/ExpandingText.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;
// const showPlayer = ref(false);

// const props = defineProps({
//   routeName: String,
//   projectFiles: Array,
//   jones: Boolean,
// });

const myViewer = ref(null);
const project = ref([]);

let width = 0;
if (document.body.scrollWidth >= 375) {
  width = 375 - 64;
}
if (document.body.scrollWidth >= 400) {
  width = 400 - 64;
}
if (document.body.scrollWidth >= 640) {
  width = 640 - 128;
}
if (document.body.scrollWidth >= 768) {
  width = 768 - 128;
}
if (document.body.scrollWidth >= 1024) {
  width = 1024 - 128;
}
if (document.body.scrollWidth >= 1280) {
  width = 1280 - 128;
}
if (document.body.scrollWidth >= 1440) {
  width = 1440 - 128;
}
if (document.body.scrollWidth >= 1536) {
  width = 1536 - 128;
}
if (document.body.scrollWidth >= 1680) {
  width = 1680 - 128;
}
// const titleContainer = ref(null);
// const softwares = ref([]);
// const text = ref("");
// const loading = ref(true);
// const processImages = ref(false);
// const loadedMediaCount = ref(0); // Tracks the number of fully loaded media
// const totalMediaCount = ref(0); // Total number of images, videos, and viewers to load

// Function to increment loaded media count
// const onMediaLoaded = () => {
//   loadedMediaCount.value++;
// };

// watchEffect(() => {
//   totalMediaCount.value = props.projectFiles.length;

//   if (
//     totalMediaCount.value > 0 &&
//     loadedMediaCount.value >= totalMediaCount.value
//   ) {
//     loading.value = false;
//     document.addEventListener("DOMContentLoaded", function () {
//       const videos = document.querySelectorAll(".autoplay-video");

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.play();
//             } else {
//               entry.target.pause();
//             }
//           });
//         },
//         { threshold: 0.5 }
//       ); // Adjust threshold as needed

//       videos.forEach((video) => observer.observe(video));
//     });
//   }
// });

onMounted(async () => {
  const res = await fetch(
    `https://directus-production-8a29.up.railway.app/items/projects?filter[slug][_eq]=${slug}`
  );
  const json = await res.json();
  project.value = json.data?.[0]; // assuming slug is unique
  console.log(project);

  await nextTick();

  myViewer.value = new marmoset.WebViewer(
    width,
    (width * 9) / 16,
    `https://prismatic-brioche-bc0903.netlify.app/${slug}.mview`
  );

  if (window && document && myViewer.value.resize) {
    let lastResizeTimeout = null;
    function resizeMarmoset() {
      let width = 0;
      if (document.body.scrollWidth >= 375) {
        width = 375 - 64;
      }
      if (document.body.scrollWidth >= 400) {
        width = 400 - 64;
      }
      if (document.body.scrollWidth >= 640) {
        width = 640 - 128;
      }
      if (document.body.scrollWidth >= 768) {
        width = 768 - 128;
      }
      if (document.body.scrollWidth >= 1024) {
        width = 1024 - 128;
      }
      if (document.body.scrollWidth >= 1280) {
        width = 1280 - 128;
      }
      if (document.body.scrollWidth >= 1440) {
        width = 1440 - 128;
      }
      if (document.body.scrollWidth >= 1536) {
        width = 1536 - 128;
      }
      if (document.body.scrollWidth >= 1680) {
        width = 1680 - 128;
      }
      if (lastResizeTimeout) {
        clearTimeout(lastResizeTimeout);
      }
      lastResizeTimeout = setTimeout(function () {
        myViewer.value.resize(width, (width * 9) / 16);
      }, 10);
    }
    // Add the resize event listener
    window.addEventListener("resize", resizeMarmoset);
  }

  // Append the viewer to the container
  const marmosetContainer = document.getElementById("marmoset-container");
  if (marmosetContainer) {
    console.log("hey");
    marmosetContainer.appendChild(myViewer.value.domRoot);
  }

  // Style the viewer UI
  const marmosetViewer = document.getElementById("marmoset-container");
  if (marmosetViewer) {
    marmosetViewer.style.backgroundImage = `url('/marmoset-thumbnails/${slug}-thumbnail.png')`;
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
