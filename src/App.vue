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
        $route.path !== '/indiana-jones'
          ? 'bg-transparent'
          : 'bg-menu-gray',
        $route.path == '/protected' ? 'hidden' : 'flex',
      ]"
      :style="
        $route.path !== '/' &&
        $route.path !== '/about' &&
        $route.path !== '/indiana-jones'
          ? 'background-image: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); background-repeat: no-repeat;background-size: cover;background-size: 100%;'
          : ''
      "
    >
      <nav
        class="gap-x-16 text-white text-lg w-full flex items-center py-6 px-6 sm:px-16 container"
      >
        <RouterLink
          to="/"
          class="hover:underline"
          :class="$route.path == '/' ? 'font-bold' : ''"
          >Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="hover:underline"
          :class="$route.path == '/about' ? 'font-bold' : ''"
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
            class="hover:underline"
            href="https://www.linkedin.com/in/manka-huszar-120758234/"
            target="_blank"
            >Manka Huszar</a
          ></span
        >
      </div>
    </footer>
  </main>
</template>
