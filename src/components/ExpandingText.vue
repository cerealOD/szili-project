<template>
  <div class="mb-8 flex flex-col items-center">
    <div
      class="md:text-lg lg:text-xl font-light text-white lg:px-32 xl:px-40 2xl:px-64 expanding-text max-h-48 overflow-hidden"
      :class="!expanded ? 'add-mask' : ''"
      id="expanding-div"
    >
      <div id="intro-text" ref="introText" v-html="text"></div>
    </div>
    <button
      class="pt-8 text-white flex items-center gap-x-1"
      @click="setExpanded"
      ref="expandButton"
    >
      <img :src="expanded ? '/icons/up.svg' : '/icons/down.svg'" />
      {{ expanded ? "Read Less" : "Read More" }}
    </button>
  </div>
</template>
<script setup>
import { ref, nextTick, watch } from "vue";
const expanded = ref(false);
const introText = ref(null);
const expandButton = ref(null);
const introTextHeight = ref(Number);

const props = defineProps({
  text: String,
});

const setExpanded = () => {
  let expanding = document.getElementById("expanding-div");
  !expanded.value
    ? (expanding.style.maxHeight = `${introTextHeight.value}` + "px")
    : (expanding.style.maxHeight = "192px");
  expanded.value ? (expanded.value = false) : (expanded.value = true);
};

const updateHeight = async () => {
  await nextTick(); // Wait for DOM updates
  if (introText.value) {
    introTextHeight.value = introText.value.offsetHeight;
    // console.log("Updated height:", introTextHeight.value);
    if (introTextHeight.value < 192) {
      expanded.value = true;
      expandButton.value.style.display = "none";
    }
  }
};

watch(() => props.text, updateHeight);
</script>
<style>
.expanding-text {
  transition: max-height 0.4s cubic-bezier(0.25, 0.85, 0.55, 1);
}
.expanding-text.add-mask {
  --mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0) 95%,
      rgba(0, 0, 0, 0) 0
    )
    100% 50% / 100% 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}
</style>
