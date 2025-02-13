<template>
  <div
    class="bg-menu-gray rounded-2xl p-8 flex flex-col lg:ml-8 lg:items-center lg:w-[360px] mb-16 lg:mb-0 lg:sticky lg:top-[156px]"
  >
    <div class="flex gap-x-4 flex-col sm:flex-row lg:flex-col lg:items-center">
      <div
        class="bg-center bg-no-repeat bg-cover h-32 w-32 sm:h-24 sm:w-24 lg:h-36 lg:w-36 rounded-full prof-pic mb-8 flex-none"
      ></div>
      <div class="flex flex-col lg:items-center">
        <span
          class="text-white text-xl lg:text-3xl font-bold lg:whitespace-nowrap mb-2 lg:mb-4"
        >
          Szilard Hazi
        </span>
        <span
          class="text-white lg:text-lg font-semibold lg:whitespace-nowrap lg:mb-1"
        >
          3D Environment & character art
        </span>
        <span
          class="text-white text-sm lg:text-base font-medium lg:whitespace-nowrap mb-8 flex items-center gap-x-1"
        >
          <img :src="'/icons/globe.svg'" />
          Budapest, Hungary
        </span>
      </div>
    </div>
    <div class="text-white border-b border-solid border-white pb-8 mb-8">
      Hi, my name is Szilard, and I’m a passionate, self-taught 3D artist with
      over three years of industry experience, specializing in game environments
      and character art. For more details about my experience and work, please
      visit the
      <a href="/about" class="cursor-pointer hover:underline font-medium"
        >About</a
      >
      tab.
    </div>
    <div class="border-b border-solid border-white pb-8 mb-8 w-full">
      <div class="text-white font-medium text-left mb-6 w-full">
        Contact & Socials
      </div>
      <a
        href="mailto:szilard.hazi91@gmail.com"
        class="text-white hover:underline w-full mb-4 cursor-pointer flex items-center gap-x-2"
      >
        <img :src="'/icons/mail.svg'" />
        szilard.hazi91@gmail.com
      </a>
      <div class="text-white flex items-center w-full gap-x-2">
        <a
          href="https://www.artstation.com/szilardhazi3d"
          class="cursor-pointer"
        >
          <img :src="'/icons/artstation.svg'" width="32" />
        </a>
        <a
          href="https://www.linkedin.com/in/szilard-hazi-3d/"
          class="cursor-pointer"
        >
          <img :src="'/icons/linkedin.svg'" width="30"
        /></a>
      </div>
    </div>
    <button
      class="flex items-center gap-x-1 bg-gray p-2 rounded-lg text-white hover:bg-white hover:text-gray resume-download"
      style="width: fit-content"
      @click="downLoadPdf"
    >
      <img :src="'/icons/download.svg'" width="20" class="resume-svg-white" />
      <img
        :src="'/icons/download-gray.svg'"
        width="20"
        class="resume-svg-gray"
      />
      <div class="text-sm font-medium text-left">Download resume</div>
    </button>
  </div>
</template>

<script setup>
const downLoadPdf = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.target = "_blank";
  link.download = "Szilard Hazi - Resume";

  // Simulate a click on the element <a>
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
<style>
.resume-svg-gray {
  display: none;
}
.resume-download:hover {
  .resume-svg-white {
    display: none;
  }
  .resume-svg-gray {
    display: block;
  }
}
.resume-download {
  transition: all 0.25s cubic-bezier(0.25, 0.85, 0.55, 1);
}
</style>
