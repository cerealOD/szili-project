<template>
  <div class="video-wrap">
    <video
      playsinline
      controls
      :muted="muted"
      :autoplay="isMobile"
      class="autoplay-video rounded-3xl"
      loop
      @loadeddata="onVideoLoad"
    >
      <source :src="mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

defineProps({
  mp4: String,
  muted: { type: Boolean, default: true },
});

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
});

const emit = defineEmits(["loaded"]);

const onVideoLoad = () => {
  emit("loaded");
};
</script>
