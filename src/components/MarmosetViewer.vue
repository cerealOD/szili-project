<template>
  <div id="marmoset-container" class="w-full relative">
    <div
      v-if="isMobile"
      class="absolute rounded-3xl bg-black bg-opacity-50 backdrop-blur-sm z-30 text-center text-white text-opacity-80 italic flex items-center justify-center font-semibold p-8 md:p-16 text-sm md:text-base lg:text-lg"
      :style="{ width: 100 + '%' }"
      style="aspect-ratio: 16 / 9"
    >
      View the 3D model on a desktop computer for the full experience.
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  fileName: String,
});

const emit = defineEmits(["loaded"]);
const isMobile = ref(false);

const width = ref(0);

// Calculate initial width for marmoset viewer
const calculateWidth = () => {
  if (document.body.scrollWidth >= 375) {
    width.value = 375 - 48;
  }
  if (document.body.scrollWidth >= 400) {
    width.value = 400 - 48;
  }
  if (document.body.scrollWidth >= 640) {
    width.value = 640 - 128;
  }
  if (document.body.scrollWidth >= 768) {
    width.value = 768 - 128;
  }
  if (document.body.scrollWidth >= 1024) {
    width.value = 1024 - 128;
  }
  if (document.body.scrollWidth >= 1280) {
    width.value = 1280 - 128;
  }
  if (document.body.scrollWidth >= 1440) {
    width.value = 1440 - 128;
  }
  if (document.body.scrollWidth >= 1536) {
    width.value = 1536 - 128;
  }
  if (document.body.scrollWidth >= 1680) {
    width.value = 1680 - 128;
  }
};
// Create a reactive ref for the myViewer instance
const myViewer = ref(null);

onMounted(() => {
  calculateWidth();
  isMobile.value = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Initialize the Marmoset viewer only if hasMarmoset is true and with init width and height
  myViewer.value = new marmoset.WebViewer(
    width.value,
    (width.value * 9) / 16,
    `https://prismatic-brioche-bc0903.netlify.app/${props.fileName}.mview`
  );

  if (window && document && myViewer.value.resize) {
    let lastResizeTimeout = null;
    function resizeMarmoset() {
      // Resize on screen change
      calculateWidth();
      if (lastResizeTimeout) {
        clearTimeout(lastResizeTimeout);
      }
      lastResizeTimeout = setTimeout(function () {
        myViewer.value.resize(width.value, (width.value * 9) / 16);
      }, 10);
    }
    // Add the resize event listener
    window.addEventListener("resize", resizeMarmoset);
  }

  // Append the viewer to the container
  const marmosetContainer = document.getElementById("marmoset-container");
  if (marmosetContainer) {
    marmosetContainer.appendChild(myViewer.value.domRoot);
  }

  // Style the viewer UI
  const marmosetViewer = document.getElementById("marmoset-container");
  if (marmosetViewer) {
    marmosetViewer.style.backgroundImage = `url('/marmoset-thumbnails/${props.fileName}-thumbnail.png')`;
  }
  // Emit the loaded event once the viewer is initialized
  setTimeout(() => {
    emit("loaded");
  }, 1000);
});
</script>
<style>
#marmoset-container {
  @apply rounded-3xl bg-center bg-cover bg-no-repeat;
}
#marmosetUI {
  @apply rounded-3xl;
  canvas {
    display: none;
  }
}
</style>
