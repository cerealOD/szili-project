<template>
  <div class="bg-deep-blue" style="min-height: 100vh">
    <main>
      <header class="sticky top-0">
        <nav
          class="gap-x-16 text-white text-xl w-full flex items-center py-8 px-16"
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
      <section class="px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <RouterView :key="$route.path" />
      </section>
    </main>
  </div>
</template>
