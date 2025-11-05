<template>
  <div
    class="bg-menu-gray shadow-lg rounded-2xl p-8 flex flex-col lg:ml-8 lg:items-center lg:w-[360px] mb-16 lg:mb-0 lg:sticky lg:top-[156px]"
  >
    <div class="flex gap-x-4 flex-col sm:flex-row lg:flex-col lg:items-center">
      <figure class="mb-8 flex-none lg:items-center">
        <img
          src="../assets/prof-pic.jpg"
          alt="Portrait of Szilard Hazi"
          class="bg-center bg-no-repeat bg-cover h-32 w-32 sm:h-24 sm:w-24 lg:h-36 lg:w-36 rounded-full"
          loading="lazy"
        />
      </figure>

      <div class="flex flex-col lg:items-center">
        <h2
          class="text-white text-xl lg:text-3xl font-bold lg:whitespace-nowrap mb-2 lg:mb-4"
        >
          Szilard Hazi
        </h2>
        <span
          class="text-white text-opacity-90 lg:text-lg font-semibold lg:whitespace-nowrap lg:mb-1"
        >
          3D Environment & character art
        </span>
        <span
          class="text-white text-opacity-70 text-sm lg:text-base font-medium lg:whitespace-nowrap mb-8 flex items-center gap-x-1"
        >
          <img
            :src="'/icons/globe.svg'"
            class="w-5 h-5"
            alt=""
            aria-hidden="true"
          />
          Budapest, Hungary
        </span>
      </div>
    </div>
    <p class="text-white border-b border-solid border-white pb-8 mb-8">
      Hi, my name is Szilard, and I’m a passionate, self-taught 3D artist with
      3+ years of industry experience, specializing in game environments and
      character art. For more details about my experience and work, please visit
      the
      <RouterLink
        to="/about"
        class="inline-block cursor-pointer font-medium underlined-link"
      >
        About
      </RouterLink>
      tab.
    </p>
    <div class="border-b border-solid border-white pb-8 mb-8 w-full">
      <span class="text-white font-medium text-left w-full">
        Contact & Socials
      </span>
      <a
        href="mailto:szilard.hazi91@gmail.com"
        class="mt-6 text-white w-full mb-4 cursor-pointer flex items-center gap-x-2 underlined-link"
        aria-label="Email Szilard Hazi"
      >
        <img :src="'/icons/mail.svg'" alt="" aria-hidden="true" />
        szilard.hazi91@gmail.com
      </a>
      <div class="text-white flex items-center w-full gap-x-2">
        <a
          href="https://www.artstation.com/szilardhazi3d"
          class="cursor-pointer"
          aria-label="Szilard Hazi on ArtStation"
        >
          <img
            :src="'/icons/artstation.svg'"
            width="30"
            alt="Artstation logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/szilard-hazi-3d/"
          class="cursor-pointer bg-white rounded-lg"
          aria-label="Szilard Hazi on LinkedIn"
        >
          <img
            :src="'/icons/linkedin.svg'"
            width="28"
            class="rounded-md"
            alt="LinkedIn logo"
        /></a>
      </div>
    </div>
    <button
      type="button"
      aria-label="Download Szilard Hazi's resume as PDF"
      class="flex items-center gap-x-1 bg-gray p-2 rounded-lg text-white hover:bg-white hover:text-gray resume-download text-sm font-medium text-left"
      style="width: fit-content"
      @click="downLoadPdf"
    >
      <img
        :src="'/icons/download.svg'"
        width="20"
        class="resume-svg-white"
        alt="Download icon"
      />
      <img
        :src="'/icons/download-gray.svg'"
        width="20"
        class="resume-svg-gray"
        alt="Download icon"
      />
      Download Resume
    </button>
  </div>
</template>

<script setup>
const downLoadPdf = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.target = "_blank";
  link.download = "Szilard Hazi - Resume";

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
</style>
