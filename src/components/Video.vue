<template>
  <div class="video-wrap">
    <video
      controls="true"
      autoplay="true"
      class="rounded-3xl"
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
