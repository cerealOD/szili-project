<template>
  <div class="video-wrap">
    <video
      playsinline
      controls
      muted
      preload="auto"
      class="autoplay-video rounded-3xl"
      loop
      @loadeddata="onVideoLoad"
    >
      <source :src="mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
const props = defineProps({
  mp4: String,
});

const emit = defineEmits(["loaded"]);

const onVideoLoad = () => {
  emit("loaded");
};
</script>
