<template>
  <div
    class="bg-menu-gray rounded-2xl p-8 flex flex-col lg:ml-8 lg:items-center lg:w-[380px] mb-16 lg:mb-0"
  >
    <div class="flex gap-x-4 flex-col sm:flex-row lg:flex-col lg:items-center">
      <div
        class="bg-center bg-no-repeat bg-cover h-32 w-32 sm:h-24 sm:w-24 lg:h-40 lg:w-40 rounded-full prof-pic mb-8 flex-none"
      ></div>
      <div class="flex flex-col lg:items-center">
        <span
          class="text-white text-xl lg:text-3xl font-bold lg:whitespace-nowrap mb-2 lg:mb-4"
        >
          Szilard Hazi
        </span>
        <span
          class="text-white lg:text-lg font-medium lg:whitespace-nowrap lg:mb-4"
        >
          3D Environment & character art
        </span>
        <span
          class="text-white text-sm lg:text-lg font-medium lg:whitespace-nowrap mb-8 flex items-center gap-x-1"
        >
          <img :src="require('../assets/icons/globe.svg')" />
          Budapest, Hungary
        </span>
      </div>
    </div>
    <div class="text-white border-b border-solid border-white pb-8 mb-8">
      Hi, my name is Szilard, and I’m a passionate, self-taught 3D artist with
      over three years of industry experience, specializing in game environments
      and character art. For more details about my experience and work, please
      visit the About tab.
    </div>
    <div class="text-white font-medium text-left mb-8 w-full">
      Contact & Socials
    </div>
    <a
      href="mailto:szilard.hazi91@gmail.com"
      class="text-white hover:underline w-full mb-6 cursor-pointer flex items-center gap-x-2"
    >
      <img :src="require('../assets/icons/mail.svg')" />
      szilard.hazi91@gmail.com
    </a>
    <div class="text-white flex items-center w-full gap-x-2">
      <a
        href="https://www.linkedin.com/in/szilard-hazi-3d/"
        class="cursor-pointer"
      >
        <img :src="require('../assets/icons/linkedin.svg')" width="30"
      /></a>
      <a href="https://www.artstation.com/szilardhazi3d" class="cursor-pointer">
        <img :src="require('../assets/icons/artstation.svg')" width="32" />
      </a>
    </div>
  </div>
</template>
