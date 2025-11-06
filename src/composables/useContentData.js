import { ref } from "vue";

const contentData = ref(null);
let loading = false;

export async function useContentData() {
  if (contentData.value) return contentData.value;
  if (!loading) {
    loading = true;
    const res = await fetch("/content.json", { cache: "force-cache" });
    contentData.value = await res.json();
  }
  return contentData.value;
}
