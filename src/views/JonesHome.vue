<template>
  <main>
    <RouterLink
      to="/"
      class="w-full flex items-center text-white gap-x-2 sm:text-lg underlined-link"
      style="width: fit-content"
    >
      <img
        :src="'/icons/back.svg'"
        class="w-6 sm:w-9"
        alt=""
        aria-hidden="true"
      />
      Back to Home
    </RouterLink>
    <div class="flex flex-col items-center">
      <h1
        class="text-3xl lg:text-4xl xl:text-5xl font-medium py-16 text-center text-white"
      >
        Indiana Jones and the Great Circle <br />
        Art Blast
      </h1>
      <ExpandingText :text="intro"></ExpandingText>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 sm:gap-4"
      >
        <RouterLink
          to="/projects/indiana-jones-art-blast/iraq"
          class="project-container-jones"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/iraq_thumbnail.png'"
                class="rounded-2xl"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">Iraq</figcaption>
            </figure>
            <div
              class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2>Iraq</h2>
              </div>
            </div>
          </article>
        </RouterLink>

        <RouterLink
          to="/projects/indiana-jones-art-blast/dream-vol-1"
          class="project-container-jones"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/nightmare_1_thumbnail.png'"
                class="rounded-2xl"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">Dream Vol. 1</figcaption>
            </figure>
            <div
              class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2>Dream Vol. 1</h2>
              </div>
            </div>
          </article>
        </RouterLink>
        <RouterLink
          to="/projects/indiana-jones-art-blast/dream-vol-2"
          class="project-container-jones"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/nightmare_2_thumbnail.png'"
                class="rounded-2xl"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">Dream Vol. 2</figcaption>
            </figure>
            <div
              class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2>Dream Vol. 2</h2>
              </div>
            </div>
          </article>
        </RouterLink>
        <RouterLink
          to="/projects/indiana-jones-art-blast/shanghai"
          class="project-container-jones"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/shanghai_thumbnail.png'"
                class="rounded-2xl"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">Shanghai</figcaption>
            </figure>
            <div
              class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2>Shanghai</h2>
              </div>
            </div>
          </article>
        </RouterLink>
        <RouterLink
          to="/projects/indiana-jones-art-blast/sukhothai"
          class="project-container-jones"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/sukhothai_thumbnail.png'"
                class="rounded-2xl"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">Sukhothai</figcaption>
            </figure>
            <div
              class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2>Sukhothai</h2>
              </div>
            </div>
          </article>
        </RouterLink>
        <RouterLink
          to="/projects/indiana-jones-art-blast/treehouse-vol-1"
          class="project-container-jones"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/treehouse_1_thumbnail.png'"
                class="rounded-2xl"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">Treehouse Vol. 1</figcaption>
            </figure>
            <div
              class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2>Treehouse Vol. 1</h2>
              </div>
            </div>
          </article>
        </RouterLink>
        <RouterLink
          to="/projects/indiana-jones-art-blast/treehouse-vol-2"
          class="project-container-jones"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/treehouse_2_thumbnail.png'"
                class="rounded-2xl"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">Treehouse Vol. 2</figcaption>
            </figure>
            <div
              class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2>Treehouse Vol. 2</h2>
              </div>
            </div>
          </article>
        </RouterLink>
        <RouterLink
          to="/projects/indiana-jones-art-blast/vatican"
          class="project-container-jones"
        >
          <article>
            <figure>
              <img
                :src="'/thumbnails/vatican_thumbnail.png'"
                class="rounded-2xl"
                alt="Project thumbnail"
              />
              <figcaption class="sr-only">Vatican</figcaption>
            </figure>
            <div
              class="background-overlay-jones opacity-0 absolute bottom-0 left-0 h-full w-full rounded-2xl"
              style="background-color: transparent; z-index: 4"
            >
              <div class="project-text">
                <h2>Vatican</h2>
              </div>
            </div>
          </article>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ExpandingText from "../components/ExpandingText.vue";
const intro = ref("");

onMounted(async () => {
  const res = await fetch(
    "https://directus-production-8a29.up.railway.app/items/projects?filter[slug][_eq]=indiana-jones-art-blast"
  );
  const projectJson = await res.json();
  intro.value = projectJson.data[0].description;
});
</script>
<style>
.project-container-jones {
  position: relative;
  border-radius: 16px;
  aspect-ratio: 1/1;
}
.background-overlay-jones {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.project-container-jones:hover {
  .background-overlay-jones {
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.08049340341605393) 26%,
      rgba(0, 0, 0, 0.8003813585981268) 69%,
      rgba(0, 0, 0, 0.9460396219034489) 88%
    );
  }
}
</style>
