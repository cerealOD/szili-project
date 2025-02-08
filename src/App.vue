<template>
  <div class="bg-deep-blue" style="min-height: 100vh">
    <main>
      <header class="sticky top-0">
        <nav
          class="gap-x-16 text-white bg-menu-gray w-full flex items-center py-4 px-16"
        >
          <RouterLink to="/" class="hover:underline">Home </RouterLink>
          <RouterLink to="/about" class="hover:underline">About</RouterLink>
          <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
        </nav>
      </header>
      <RouterView :key="$route.path" />
    </main>
  </div>
</template>
