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
import HomeBanner from "@/components/Home/HomeBanner.vue";
import HomeNews from "@/components/Home/HomeNews.vue";
import HomeReason from "@/components/Home/HomeReason.vue";
import HomeCollection from "@/components/Home/HomeCollection.vue";
import HomePurchase from "@/components/Home/HomePurchase.vue";

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