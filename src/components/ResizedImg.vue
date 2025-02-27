<template>
  <img :src="resizedImage" v-if="resizedImage" alt="Resized Image" />
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
