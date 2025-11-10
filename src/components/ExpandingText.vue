<template>
  <div class="mb-4 lg:mb-12 flex flex-col items-center">
    <div
      class="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white lg:px-32 xl:px-40 2xl:px-64 expanding-text min-h-[150px] lg:min-h-[380px] max-h-[150px] lg:max-h-[380px] overflow-hidden"
      :class="!expanded ? 'add-mask' : ''"
      ref="expandingDiv"
    >
      <p
        id="intro-text"
        ref="introText"
        v-html="realText"
        style="line-height: 1.5"
      ></p>
    </div>
    <button
      class="pt-8 text-white flex items-center gap-x-1 text-sm sm:text-base text-opacity-80"
      @click="setExpanded"
      ref="expandButton"
    >
      <img :src="expanded ? '/icons/up.svg' : '/icons/down.svg'" />
      {{ expanded ? "Read Less" : "Read More" }}
    </button>
  </div>
</template>
<script setup>
import { ref, nextTick, watch, onMounted, computed } from "vue";
const expandingDiv = ref(null);
const expanded = ref(false);
const introText = ref(null);
const expandButton = ref(null);
const introTextHeight = ref(Number);

const props = defineProps({
  text: String,
});

const realText = computed(() => props.text.replace(/\/n/g, "<br><br>"));

const setExpanded = () => {
  if (expandingDiv.value) {
    !expanded.value
      ? (expandingDiv.value.style.maxHeight = `${introTextHeight.value}` + "px")
      : (expandingDiv.value.style.maxHeight = getComputedStyle(
          expandingDiv.value
        ).minHeight);
    expanded.value = !expanded.value;
  }
};

const updateHeight = async () => {
  await nextTick();
  // Wait for DOM to finish updating, so we surely get the text
  requestAnimationFrame(() => {
    if (expandingDiv.value) {
      if (introText.value) {
        introTextHeight.value = introText.value.offsetHeight;
        if (
          introTextHeight.value <
          parseFloat(getComputedStyle(expandingDiv.value).minHeight)
        ) {
          expanded.value = true;
          expandButton.value.style.display = "none";
          expandingDiv.value.style.minHeight = 0;
        }
      }
    }
  });
};
onMounted(updateHeight);
// Use post option to wait for DOM update
watch(() => props.text, updateHeight, { flush: "post" });
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
