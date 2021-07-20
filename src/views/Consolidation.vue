<template>
  <div class="consolidation">
    <Banner />
    <Process />
  </div>
</template>

<script>
import Banner from "@/components/Consolidation/Banner.vue";
import Process from "@/components/Consolidation/Process.vue";

export default {
  name: "Consolidation",
  components: {
    Banner,
    Process,
  },
};
</script>