<template>
  <div class="relative project-container">
    <img
      :src="resizedImage"
      v-if="resizedImage"
      alt="Resized Image"
      class="rounded-3xl"
      @load="onImageLoad"
    />
    <div
      class="open-overlay opacity-0 absolute bottom-0 left-0 w-full rounded-2xl flex justify-end p-6 h-full items-end"
      style="background-color: transparent; z-index: 4"
    >
      <a :href="imgSrc" target="_blank" class="p-2 rounded-xl open-link">
        <img src="/icons/open.svg" alt="External open icon" />
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

// Emits event when image is loaded
const emit = defineEmits(["loaded"]);

const resizedImage = ref(null);

const resizeLocalImage = async () => {
  const img = new Image();
  img.src = new URL(`${props.imgSrc}`, import.meta.url).href;
  await new Promise((resolve) => (img.onload = resolve));

  const canvas = document.createElement("canvas");
  let targetWidth;

  if (window.innerWidth < 768) {
    targetWidth = 768;
  } else if (window.innerWidth < 1024) {
    targetWidth = 1024;
  } else if (window.innerWidth < 1440) {
    targetWidth = 1920;
  } else {
    targetWidth = 2560;
  }

  canvas.width = targetWidth;
  canvas.height = (img.height / img.width) * targetWidth;

  const picaInstance = pica();
  await picaInstance.resize(img, canvas);

  resizedImage.value = canvas.toDataURL("image/jpeg", 0.8);
};

const onImageLoad = () => {
  emit("loaded");
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
