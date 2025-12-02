<template>
  <div class="flex flex-col items-center justify-between min-h-[100vh]">
    <header class="header-styles">
      <nav
        class="gap-x-8 sm:gap-x-14 md:gap-x-16 text-white text-base sm:text-lg w-full flex items-center py-5 px-6 sm:p-6 sm:px-16 container"
      >
        <RouterLink
          to="/"
          class="underlined-link"
          :class="$route.path == '/' ? 'font-bold !no-underline' : ''"
          >Archviz
        </RouterLink>
        <RouterLink
          to="/game-art"
          class="underlined-link"
          :class="$route.path == '/game-art' ? 'font-bold !no-underline' : ''"
          >Game Art
        </RouterLink>
        <RouterLink
          to="/about"
          class="underlined-link"
          :class="$route.path == '/about' ? 'font-bold !no-underline' : ''"
          >About</RouterLink
        >
      </nav>
    </header>

    <div class="pt-8 pb-20 md:py-12 container px-6 sm:px-16">
      <RouterView :key="$route.path" />
    </div>

    <footer class="w-full flex justify-center bg-menu-gray">
      <div
        class="container py-6 px-6 sm:px-16 text-white w-full text-sm font-medium flex items-center gap-x-1"
      >
        <span>Crafted with</span>
        <img src="/icons/heart.svg" class="w-4" alt="Heart icon" />
        <span
          >by
          <a
            class="underlined-link"
            href="https://www.linkedin.com/in/manka-huszar-120758234/"
            target="_blank"
            >Manka Huszar</a
          ></span
        >
      </div>
    </footer>
  </div>
</template>
<style>
.header-styles {
  @apply sticky top-0 z-30 w-full flex justify-center;
  background-image: linear-gradient(
    hsl(0, 0%, 0%) 0%,
    hsla(0, 0%, 0%, 0.738) 19%,
    hsla(0, 0%, 0%, 0.541) 34%,
    hsla(0, 0%, 0%, 0.382) 47%,
    hsla(0, 0%, 0%, 0.278) 56.5%,
    hsla(0, 0%, 0%, 0.194) 65%,
    hsla(0, 0%, 0%, 0.126) 73%,
    hsla(0, 0%, 0%, 0.075) 80.2%,
    hsla(0, 0%, 0%, 0.042) 86.1%,
    hsla(0, 0%, 0%, 0.021) 91%,
    hsla(0, 0%, 0%, 0.008) 95.2%,
    hsla(0, 0%, 0%, 0.002) 98.2%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
}
</style>
