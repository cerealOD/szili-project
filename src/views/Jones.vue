<template>
  <div class="lg:px-16">
    <a
      href="/"
      class="w-full flex items-center text-white gap-x-2 text-lg hover:underline"
    >
      <img :src="require('../assets/icons/back.svg')" />
      Back to Home
    </a>
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
    >
      Indiana Jones and The Great Circle
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
    >
      <RouterLink to="/indiana-jones/iraq">
        <div
          class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
          style="aspect-ratio: 1/1"
        ></div>
      </RouterLink>
      <RouterLink to="/indiana-jones/nightmare-vol-1">
        <div
          class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
          style="aspect-ratio: 1/1"
        ></div>
      </RouterLink>
      <RouterLink to="/indiana-jones/nightmare-vol-2">
        <div
          class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
          style="aspect-ratio: 1/1"
        ></div>
      </RouterLink>
      <RouterLink to="/indiana-jones/shanghai">
        <div
          class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
          style="aspect-ratio: 1/1"
        ></div>
      </RouterLink>
      <RouterLink to="/indiana-jones/sukhothai">
        <div
          class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
          style="aspect-ratio: 1/1"
        ></div>
      </RouterLink>
      <RouterLink to="/indiana-jones/treehouse-vol-1">
        <div
          class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
          style="aspect-ratio: 1/1"
        ></div>
      </RouterLink>
      <RouterLink to="/indiana-jones/treehouse-vol-2">
        <div
          class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
          style="aspect-ratio: 1/1"
        ></div>
      </RouterLink>
      <RouterLink to="/indiana-jones/vatican">
        <div
          class="text-2xl font-bold py-16 text-center text-white rounded-2xl bg-center bg-no-repeat bg-cover jones-thumbnail"
          style="aspect-ratio: 1/1"
        ></div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
</script>
