<template>
  <div class="flex flex-row items-center gap-x-8">
    <button class="px-8 py-4 rounded-xl bg-red text-white font-bold text-3xl">
      No
    </button>
    <image-container :source="goodFigures[0]"></image-container>
    <button class="px-8 py-4 rounded-xl bg-green text-white font-bold text-3xl">
      Yes
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // username: {
    //   type: String,
    //   required: true
    // },
    // userage: {
    //   type: Number,
    //   required: true
    // }
  },
  data() {
    return {
      goodFigures: [require("../assets/goodFigures/image1.jpg")],
      badFigures: [require("../assets/badFigures/bg-01.jpg")],
    };
  },
};
</script>
