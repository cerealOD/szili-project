<template>
  <div
    class="bg-menu-gray shadow-lg rounded-lg sm:rounded-xl xl:rounded-2xl p-8 flex flex-col lg:ml-8 lg:items-center lg:w-[360px] mb-16 lg:mb-0 lg:sticky lg:top-[124px]"
  >
    <div class="flex gap-x-4 flex-col sm:flex-row lg:flex-col lg:items-center">
      <figure class="mb-4 flex-none lg:items-center">
        <img
          src="../assets/prof-pic.jpg"
          alt="Portrait of Szilard Hazi"
          class="bg-center bg-no-repeat bg-cover h-28 w-28 sm:h-24 sm:w-24 lg:h-32 lg:w-32 rounded-full"
          loading="lazy"
        />
      </figure>

      <div class="flex flex-col lg:items-center">
        <h2
          class="text-white text-lg md:text-xl lg:text-[28px] font-bold lg:whitespace-nowrap mb-2"
        >
          Szilard Hazi
        </h2>
        <span
          class="text-white text-opacity-90 font-medium lg:whitespace-nowrap"
        >
          3D Environment & character art
        </span>
        <span
          class="text-white text-opacity-60 text-sm font-medium lg:whitespace-nowrap mb-6 flex items-center gap-x-1"
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
    <p
      class="text-white border-b border-solid border-white pb-6 mb-6 text-sm sm:text-base"
    >
      Hi, my name is Szilard, and I’m a passionate, self-taught 3D artist with
      over 3 years of experience creating high-quality, photorealistic
      environments and characters. Recently I have expanded my focus into
      architectural visualization, applying my foundations to craft atmospheric
      spaces. For more details about my experience and work, please visit the
      <RouterLink
        to="/about"
        class="inline-block cursor-pointer font-medium underlined-link"
      >
        About
      </RouterLink>
      tab.
    </p>
    <div class="border-b border-solid border-white pb-6 mb-6 w-full">
      <h3 class="text-white font-medium text-left w-full text-base">
        Contact & Socials
      </h3>
      <a
        href="mailto:szilard.hazi91@gmail.com"
        class="mt-5 text-white w-full mb-2 cursor-pointer flex items-center gap-x-2 underlined-link text-sm"
        aria-label="Email Szilard Hazi"
      >
        <img
          :src="'/icons/mail.svg'"
          alt=""
          aria-hidden="true"
          class="w-4 sm:w-5"
        />
        szilard.hazi91@gmail.com
      </a>
      <div class="text-white flex items-center w-full gap-x-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.artstation.com/szilardhazi3d"
          class="cursor-pointer bg-gray rounded-md p-1.5 flex items-center justify-center gap-x-1 text-xs hover:bg-white hover:text-gray transition-all font-medium"
          aria-label="Szilard Hazi on ArtStation"
        >
          <img :src="'/icons/artstation.svg'" alt="Artstation logo" />
          ArtStation
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/szilard-hazi-3d/"
          class="cursor-pointer bg-gray rounded-md p-1.5 flex items-center justify-center gap-x-1 text-xs hover:bg-white hover:text-deep-blue transition-all font-medium"
          aria-label="Szilard Hazi on LinkedIn"
        >
          <img :src="'/icons/linkedin.svg'" alt="LinkedIn logo" />
          LinkedIn
        </a>
      </div>
    </div>
    <button
      type="button"
      aria-label="Download Szilard Hazi's resume as PDF"
      class="flex items-center gap-x-1 bg-gray p-2 rounded-md text-white hover:bg-white hover:text-gray resume-download text-sm font-medium shadow-md"
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
