<template>
  <div class="video-wrap">
    <video controls="true" autoplay="true" class="rounded-3xl" loop="true">
      <source :src="mp4" type="video/mp4" />
    </video>
  </div>
</template>
<script>
export default {
  name: "Video",
  props: {
    mp4: String,
  },
};
</script>
