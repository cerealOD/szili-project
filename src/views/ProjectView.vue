<template>
  <div class="flex flex-col items-center">
    <div class="text-5xl font-medium py-16 text-center text-white">
      {{ routeName }}
    </div>
    <div class="text-xl font-light pb-16 text-white px-64">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </div>
    <img
      v-for="image in picsArray"
      :src="require(image)"
      class="rounded-3xl mb-8"
    />
    <videoPlayer
      v-for="video in videoArray"
      :mp4="require(video)"
      class="mb-8"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  props: {
    routeName: String,
    picsArray: Array,
    videoArray: Array,
  },
};
</script>
