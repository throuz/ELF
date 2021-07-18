<template>
  <div class="home">
    <HomeBanner />
    <HomeNews />
    <HomeReason />
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";
import HomeNews from "@/components/HomeNews.vue";
import HomeReason from "@/components/HomeReason.vue";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeNews,
    HomeReason,
  },
};
</script>