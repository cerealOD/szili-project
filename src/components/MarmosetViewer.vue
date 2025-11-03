<template>
  <div id="marmoset-container"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  fileName: String,
});

const emit = defineEmits(["loaded"]);

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
// Create a reactive ref for the myViewer instance
const myViewer = ref(null);

onMounted(() => {
  // Initialize the Marmoset viewer only if hasMarmoset is true
  myViewer.value = new marmoset.WebViewer(
    width,
    (width * 9) / 16,
    `https://prismatic-brioche-bc0903.netlify.app/${props.fileName}.mview`
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
  }, 1000); // Adjust timeout if needed
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
