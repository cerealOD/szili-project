<template>
  <div
    class="flex items-center justify-center"
    style="width: 500px; height: 500px"
  >
    <img :src="source" width="250" />
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
};
</script>
