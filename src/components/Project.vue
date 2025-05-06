<template>
  <RouterLink
    v-if="!project.parent_project"
    to="/"
    class="w-full flex items-center text-white gap-x-2 sm:text-lg underlined-link"
    style="width: fit-content"
  >
    <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
    Back to Home
  </RouterLink>
  <RouterLink
    v-if="project.parent_project"
    to="/projects/indiana-jones-art-blast"
    class="w-full flex items-center text-white gap-x-2 sm:text-lg underlined-link"
    style="width: fit-content"
  >
    <img :src="'/icons/back.svg'" class="w-6 sm:w-9" />
    Back to {{ parentProject.title }}
  </RouterLink>
  <div class="flex flex-col items-center">
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
    >
      {{ project.title }}
    </div>
    <ExpandingText :text="project.description"></ExpandingText>
    <div
      v-if="slug == 'double-turret-gun'"
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

    <div
      v-if="subProjects"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 sm:gap-4"
    >
      <div v-for="subProject in subProjects" :key="subProject.id">
        <RouterLink
          :to="`/projects/${project.slug}/${subProject.slug}`"
          class="relative project-container rounded-2xl"
          style="aspect-ratio: 1/1"
        >
          <div
            class="background-overlay opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
            style="background-color: transparent; z-index: 4"
          >
            <div class="project-text">
              <span>{{ subProject.title }}</span>
            </div>
          </div>
          <img
            :src="`https://directus-production-8a29.up.railway.app/assets/${subProject.thumbnail}`"
            class="rounded-2xl"
          />
        </RouterLink>
      </div>
    </div>

    <div class="w-full mt-8">
      <span class="text-white font-semibold text-2xl">Software Used</span>
      <div class="flex gap-2 flex-wrap mt-8">
        <div
          v-for="software in softwares"
          :key="software"
          class="flex items-center bg-gray p-2 rounded-lg gap-x-2 text-white"
        >
          <img
            :src="`https://directus-production-8a29.up.railway.app/assets/${software.icon}`"
            height="24px"
            width="24px"
            class="rounded-2xl"
          />
          <span>{{ software.name }}</span>
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

const myViewer = ref(null);
const project = ref([]);
const parentProject = ref([]);
const subProjects = ref([]);
const softwares = ref([]);

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

onMounted(async () => {
  const res = await fetch(
    `https://directus-production-8a29.up.railway.app/items/projects?filter[slug][_eq]=${slug}`
  );
  const json = await res.json();
  project.value = json.data?.[0];
  console.log(JSON.stringify(json, null, 2));
  const softwareIds = project.value.softwares.join(",");

  const resSoftwares = await fetch(
    `https://directus-production-8a29.up.railway.app/items/softwares?filter[id][_in]=${softwareIds}`
  );
  const jsonSoft = await resSoftwares.json();
  softwares.value = jsonSoft.data ?? [];

  const resSubProjects = await fetch(
    `https://directus-production-8a29.up.railway.app/items/projects?filter[parent_project][_eq]=${project.value.id}`
  );
  const jsonSub = await resSubProjects.json();
  subProjects.value = jsonSub.data ?? [];

  const resParentProject = await fetch(
    `https://directus-production-8a29.up.railway.app/items/projects?filter[id][_eq]=${project.value.parent_project}`
  );
  const jsonParent = await resParentProject.json();
  parentProject.value = jsonParent.data?.[0];

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
