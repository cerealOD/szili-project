<template>
  <div class="bg-deep-blue" style="min-height: 100vh">
    <main>
      <header class="sticky top-0">
        <nav
          class="gap-x-16 text-white bg-menu-gray w-full flex items-center py-6 px-16"
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
