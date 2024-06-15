<template>
  <img :src="source" width="500" />
</template>

<script>
export default {
  props: {
    source: String,
  },
  // emits: ['set-data'],
  // data() {
  //   return {
  //     enteredName: "",
  //     enteredAge: "",
  //   };
  // },
  // methods: {
  //   submitData() {
  //     this.$emit('set-data', this.enteredName, this.enteredAge);
  //   }
  // }
};
</script>
