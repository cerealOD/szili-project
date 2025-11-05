<template>
  <div class="video-wrap">
    <video
      playsinline
      controls
      :muted="muted"
      class="autoplay-video rounded-3xl"
      loop
      preload="metadata"
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

onMounted(() => {});

const emit = defineEmits(["loaded"]);

const onVideoLoad = () => {
  emit("loaded");
};
</script>
