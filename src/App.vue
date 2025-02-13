<template>
  <div class="bg-deep-blue" style="min-height: 100vh">
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
          class="gap-x-16 text-white text-lg w-full flex items-center py-6 px-8 sm:px-16 container"
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
      <section class="py-12 md:py-16 lg:pt-20 container px-8 sm:px-16">
        <RouterView :key="$route.path" />
      </section>
    </main>
  </div>
</template>
