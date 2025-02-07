<template>
  <div class="bg-deep-blue" style="min-height: 100vh">
    <main>
      <RouterLink to="/">
        <div class="text-2xl font-bold py-16 text-center text-white">
          Szilard Hazi
        </div>
      </RouterLink>
      <RouterView :key="$route.path" />
    </main>
  </div>
</template>
