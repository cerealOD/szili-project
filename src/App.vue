<template>
  <div class="flex flex-col items-center">
    <img src="../src/assets/base.jpg" />
    <image-game></image-game>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Max Schwarzmüller",
        age: 31,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age,
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
</style>
