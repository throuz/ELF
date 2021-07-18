<template>
  <div class="home-reason">
    <h1 class="title">REASON TO CHOOSE US</h1>
    <div class="circles">
      <i-circle
        v-for="(circleItem, index) in circlesData"
        :key="index"
        :percent="100"
        :size="100"
      >
        <div>{{ circleItem.textOne }}</div>
        <div class="prominent">{{ circleItem.textTwo }}</div>
        <div>{{ circleItem.textThree }}</div>
      </i-circle>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circlesData: [
        { textOne: "成立", textTwo: "30", textThree: "年" },
        { textOne: "累積", textTwo: "132,500", textThree: "會員" },
        { textOne: "每天", textTwo: "3,000", textThree: "多件快遞" },
        { textOne: "填單", textTwo: "3-5", textThree: "天後到貨" },
        { textOne: "全球", textTwo: "12", textThree: "個集貨站" },
      ],
    };
  },
};
</script>

<style scoped>
.home-reason {
  padding: 30px;
  text-align: center;
}
.title {
  font-size: 25px;
  padding-bottom: 10px;
}
.circles {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.prominent {
  font-size: 20px;
  font-weight: bold;
  padding: 5px 0;
}
</style>