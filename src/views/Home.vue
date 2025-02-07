<template>
  <section>
    <div class="text-3xl font-bold py-16 text-center text-white">Portfolio</div>
    <div class="flex flex-row justify-between">
      <div class="w-full grid grid-cols-2 gap-8 p-8">
        <RouterLink to="/barbarian">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-xl bg-red"
          >
            Barbarian
          </div>
        </RouterLink>
        <RouterLink to="/inarius">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-xl bg-red"
          >
            Inarius
          </div>
        </RouterLink>
        <RouterLink to="/axe">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-xl bg-red"
          >
            Viking Axe
          </div>
        </RouterLink>
        <RouterLink to="/indiana-jones">
          <div
            class="text-2xl font-bold py-16 text-center text-white rounded-xl bg-red"
          >
            Indiana Jones
          </div>
        </RouterLink>
      </div>
      <nav class="flex flex-col p-8 gap-y-2 text-white">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>
