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
      class="open-overlay opacity-0 absolute bottom-0 left-0 w-full rounded-2xl flex justify-end p-6 items-end"
      style="background-color: transparent; z-index: 4"
    >
      <a
        :href="imgSrc"
        target="_blank"
        class="p-1.5 rounded-xl open-link bg-menu-gray/90"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 3H14.25M21 3V9.75M21 3L12.75 11.25M9.4 3C7.16 3 6.04 3 5.184 3.436C4.43139 3.81949 3.81949 4.43139 3.436 5.184C3 6.04 3 7.16 3 9.4V14.6C3 16.84 3 17.96 3.436 18.816C3.81949 19.5686 4.43139 20.1805 5.184 20.564C6.04 21 7.16 21 9.4 21H14.6C16.84 21 17.96 21 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C21 17.96 21 16.84 21 14.6V13.5"
            stroke="#EEEEF1"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
  @apply bg-white/80;
  svg {
    path {
      stroke: #171d22;
    }
  }
}
</style>
