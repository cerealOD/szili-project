<template>
  <div class="video-wrap">
    <video
      playsinline
      controls
      :autoplay="isSmall"
      class="autoplay-video rounded-3xl"
      loop
      @loadeddata="onVideoLoad"
    >
      <source :src="mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  mp4: String,
});

const isSmall = ref(false);

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize());
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize());
});

const emit = defineEmits(["loaded"]);

const onVideoLoad = () => {
  emit("loaded");
};

const checkScreenSize = () => {
  isSmall.value = window.innerWidth < 768;
};
</script>
