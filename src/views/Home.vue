<template>
  <div class="home">
    <HomeBanner />
    <HomeNews />
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";
import HomeNews from "@/components/HomeNews.vue";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeNews,
  },
};
</script>