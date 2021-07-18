<template>
  <div class="home">
    <HomeBanner />
    <HomeNews />
    <HomeReason />
    <HomeCollection />
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";
import HomeNews from "@/components/HomeNews.vue";
import HomeReason from "@/components/HomeReason.vue";
import HomeCollection from "@/components/HomeCollection.vue";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeNews,
    HomeReason,
    HomeCollection,
  },
};
</script>