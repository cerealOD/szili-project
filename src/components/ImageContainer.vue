<template>
  <div
    class="flex items-center justify-center"
    style="width: 300px; height: 300px"
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
