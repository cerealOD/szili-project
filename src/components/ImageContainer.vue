<template>
  <div class="flex items-center" style="width: 500px; height: 500px">
    <img :src="source" width="500" />
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
};
</script>
