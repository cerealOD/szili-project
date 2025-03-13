<template>
  <main
    class="flex flex-col items-center justify-between"
    style="min-height: 100vh"
  >
    <header
      class="sticky top-0 z-30 w-full flex justify-center"
      :class="[
        $route.path !== '/' &&
        $route.path !== '/about' &&
        $route.path !== '/projects/indiana-jones-art-blast'
          ? 'header-img'
          : 'bg-menu-gray',
        $route.path == '/protected' ? 'hidden' : 'flex',
      ]"
    >
      <nav
        class="gap-x-16 text-white text-lg w-full flex items-center py-6 px-6 sm:px-16 container"
      >
        <RouterLink
          to="/"
          class="underlined-link"
          :class="$route.path == '/' ? 'font-bold !no-underline' : ''"
          >Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="underlined-link"
          :class="$route.path == '/about' ? 'font-bold !no-underline' : ''"
          >About</RouterLink
        >
      </nav>
    </header>
    <div class="pt-12 pb-20 md:py-16 lg:pt-20 container px-6 sm:px-16">
      <RouterView :key="$route.path" />
    </div>
    <footer class="w-full flex justify-center bg-menu-gray">
      <div
        class="container py-6 px-6 sm:px-16 text-white w-full text-sm font-medium flex items-center gap-x-1"
      >
        <span>Crafted with</span>
        <img src="/icons/heart.svg" class="w-4" />
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
  </main>
</template>
<style>
.header-img {
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
