<template>
  <div class="home">
    <HomeBanner />
    <HomeNews />
    <HomeReason />
    <HomeCollection />
    <HomePurchase />
  </div>
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";
import HomeNews from "@/components/HomeNews.vue";
import HomeReason from "@/components/HomeReason.vue";
import HomeCollection from "@/components/HomeCollection.vue";
import HomePurchase from "@/components/HomePurchase.vue";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeNews,
    HomeReason,
    HomeCollection,
    HomePurchase,
  },
};
</script>