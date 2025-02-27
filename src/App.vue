<template>
  <main class="flex flex-col items-center justify-center">
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
          ? 'background: linear-gradient(180deg, rgba(14, 19, 23, .5) 47.75%, rgba(14, 19, 23, .4) 60%, rgba(0, 0, 0, 0) 100%);'
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
        <span>by Manka Huszar</span>
      </div>
    </footer>
  </main>
</template>
