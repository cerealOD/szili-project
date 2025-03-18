<template>
  <div class="video-wrap">
    <video
      playsinline
      autoplay
      controls="true"
      class="autoplay-video rounded-3xl"
      loop="true"
      @loadeddata="onVideoLoad"
    >
      <source :src="mp4" type="video/mp4" />
    </video>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";

const props = defineProps({
  mp4: String,
});

// Emits event when video is loaded
const emit = defineEmits(["loaded"]);

const onVideoLoad = () => {
  emit("loaded");
};
</script>
