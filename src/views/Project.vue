<template>
  <div class="flex flex-col items-center">
    <a
      v-if="!jones"
      href="/"
      class="w-full flex items-center text-white gap-x-2 text-lg hover:underline"
    >
      <img :src="require('/icons/back.svg')" />
      Back to Home
    </a>
    <a
      v-if="jones"
      href="/projects/indiana-jones"
      class="w-full flex items-center text-white gap-x-2 text-lg hover:underline"
    >
      <img :src="require('/icons/back.svg')" />
      Back to Indiana Jones and The Great Circle
    </a>
    <div
      class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
    >
      {{ routeName }}
    </div>
    <div
      class="md:text-lg lg:text-xl font-light pb-16 text-white lg:px-32 xl:px-40 2xl:px-64"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </div>
    <img
      v-for="image in picsArray"
      :src="require(image)"
      class="rounded-3xl mb-8"
    />
    <videoPlayer
      v-for="video in videoArray"
      :mp4="require(video)"
      class="mb-8"
    />
    <div
      id="marmoset-container"
      v-if="routeName == 'barbarian'"
      class="mb-8"
    ></div>
    <span class="text-white font-semibold text-2xl w-full mb-8"
      >Software Used</span
    >
    <div class="text-white flex items-center w-full gap-x-2"></div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
var width = 0;
if (document.body.scrollWidth >= 375) {
  width = 375 - 64;
}
if (document.body.scrollWidth >= 400) {
  width = 400 - 64;
}
if (document.body.scrollWidth >= 640) {
  width = 640 - 128;
}
if (document.body.scrollWidth >= 768) {
  width = 768 - 128;
}
if (document.body.scrollWidth >= 1024) {
  width = 1024 - 128;
}
if (document.body.scrollWidth >= 1280) {
  width = 1280 - 128;
}
if (document.body.scrollWidth >= 1440) {
  width = 1440 - 128;
}
if (document.body.scrollWidth >= 1536) {
  width = 1536 - 128;
}
if (document.body.scrollWidth >= 1680) {
  width = 1680 - 128;
}

var myviewer = new marmoset.WebViewer(
  width,
  (width * 9) / 16,
  "https://prismatic-brioche-bc0903.netlify.app/marmoset_test.mview"
);

export default {
  mounted() {
    // This will run once the component is mounted to the DOM
    let marmosetContainer = document.getElementById("marmoset-container");
    marmosetContainer.appendChild(myviewer.domRoot);
    let marmosetViewer = document.getElementById("marmosetUI");
    marmosetViewer.style.borderRadius = "30px";
  },
  props: {
    routeName: String,
    picsArray: Array,
    videoArray: Array,
    jones: Boolean,
  },
};
if (window && document && myviewer.resize) {
  var lastResizeTimeout = null;
  function resizeMarmoset() {
    var width = 0;
    if (document.body.scrollWidth >= 375) {
      width = 375 - 64;
    }
    if (document.body.scrollWidth >= 400) {
      width = 400 - 64;
    }
    if (document.body.scrollWidth >= 640) {
      width = 640 - 128;
    }
    if (document.body.scrollWidth >= 768) {
      width = 768 - 128;
    }
    if (document.body.scrollWidth >= 1024) {
      width = 1024 - 128;
    }
    if (document.body.scrollWidth >= 1280) {
      width = 1280 - 128;
    }
    if (document.body.scrollWidth >= 1440) {
      width = 1440 - 128;
    }
    if (document.body.scrollWidth >= 1536) {
      width = 1536 - 128;
    }
    if (document.body.scrollWidth >= 1680) {
      width = 1680 - 128;
    }

    if (lastResizeTimeout) {
      clearTimeout(lastResizeTimeout);
    }
    lastResizeTimeout = setTimeout(function () {
      myviewer.resize(width, (width * 9) / 16);
    }, 50);
  }
  window.addEventListener("resize", resizeMarmoset);
}
</script>
