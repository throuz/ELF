<template>
  <div class="purchasing">
    <Banner />
    <Steps />
  </div>
</template>

<script>
import Banner from "@/components/Purchasing/Banner.vue";
import Steps from "@/components/Purchasing/Steps.vue";

export default {
  name: "Purchasing",
  components: {
    Banner,
    Steps,
  },
};
</script>