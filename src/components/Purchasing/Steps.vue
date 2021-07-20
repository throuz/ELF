<template>
  <div class="steps">
    <h1 class="title">代購流程</h1>
    <Indentation title="1. 填寫代購訂單與支付押金" imgName="StepsImg1" />
    <Indentation title="2. 下單後如要修改或刪除訂單" imgName="StepsImg2" />
    <Indentation title="3. 訂單詢價、簡訊報價、支付款項" imgName="StepsImg3" />
    <Indentation title="4. 日本向賣家下單" imgName="StepsImg4" />
    <Indentation title="5. 日本向賣家付款並返還押金" imgName="StepsImg5" />
    <Indentation title="6. 賣家已出貨並代填委託集貨單" imgName="StepsImg6" />
  </div>
</template>

<script>
import Indentation from "@/components/Purchasing/Indentation.vue";

export default {
  name: "Steps",
  components: {
    Indentation,
  },
};
</script>

<style scoped>
.steps {
  padding: 30px 20px;
  max-width: 900px;
  margin: 0 auto;
}
.title {
  text-align: center;
}
</style>