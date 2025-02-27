<template>
  <div class="relative project-container">
    <img
      :src="resizedImage"
      v-if="resizedImage"
      alt="Resized Image"
      class="rounded-3xl"
    />
    <div
      class="open-overlay opacity-0 absolute bottom-0 left-0 w-full rounded-2xl flex justify-end p-6 h-full items-end"
      style="background-color: transparent; z-index: 4"
    >
      <a :href="imgSrc" target="_blank" class="p-2 rounded-xl open-link">
        <img src="/icons/open.svg" />
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import pica from "pica";

const props = defineProps({
  imgSrc: String,
});

// Import your local image
// import myImage from props.imgSrc;

const resizedImage = ref(null);

const resizeLocalImage = async () => {
  const img = new Image();
  img.src = new URL(`${props.imgSrc}`, import.meta.url).href;
  await new Promise((resolve) => (img.onload = resolve));

  // Create an offscreen canvas for resizing
  const canvas = document.createElement("canvas");
  if (window.innerWidth < 1440) {
    canvas.width = 1920; // Set the desired width
    canvas.height = (img.height / img.width) * 1920; // Maintain aspect ratio
  } else {
    canvas.width = 2560; // Set the desired width
    canvas.height = (img.height / img.width) * 2560; // Maintain aspect ratio
  }

  const picaInstance = pica();
  await picaInstance.resize(img, canvas);

  // Convert to Base64 and set to ref
  resizedImage.value = canvas.toDataURL("image/jpeg", 0.8);
};

onMounted(() => {
  resizeLocalImage();
});
</script>
<style>
.open-link {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.open-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
