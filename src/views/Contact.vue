<template>
  <section>
    <div class="text-2xl font-bold py-16 text-center text-white">About me</div>
    <div class="text-2xl font-bold py-16 text-center text-white">
      Lorem ipsum..
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// const search = computed({
//   get() {
//     return route.query.search ?? "";
//   },
//   set(search) {
//     router.replace({ query: { search } });
//   },
// });
</script>
