<template>
  <div class="video-wrap">
    <video
      ref="videoEl"
      playsinline
      controls
      :muted="muted"
      class="project-video rounded-3xl"
      loop
      preload="metadata"
      @loadedmetadata="generateThumbnail"
      :poster="poster"
    >
      <source :src="mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  mp4: String,
  muted: { type: Boolean, default: true },
});

const emit = defineEmits(["loaded"]);
const videoEl = ref(null);
const poster = ref("");

// Generate thumbnail for videos from first frame
const generateThumbnail = () => {
  const video = videoEl.value;
  if (!video) return;

  try {
    // Seek to first frame
    video.currentTime = 0;

    video.addEventListener(
      "seeked",
      () => {
        // Create a canvas where we draw the first frame
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        // Use video as source for drawing img
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert to image to use as thumbnail
        poster.value = canvas.toDataURL("image/jpeg", 0.6);
      },
      { once: true }
    );
  } catch (err) {
    console.warn("Thumbnail generation failed:", err);
  }
  onVideoLoad();
};

const onVideoLoad = () => {
  emit("loaded");
};
</script>
