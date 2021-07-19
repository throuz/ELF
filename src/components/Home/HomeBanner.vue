<template>
  <div class="home-banner">
    <div class="banner">天下武功，唯快不破</div>
    <ButtonGroup size="large">
      <Button type="default">登入</Button>
      <Button type="info">註冊</Button>
    </ButtonGroup>
    <div class="banner-text">
      台灣最快、最安全的網上快遞運輸平台，提供大陸、日韓、歐美等地一站式運輸回台灣服務，讓消費者全球購物0距離！安心享受網上購物樂趣！
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
};
</script>

<style scoped>
.home-banner {
  background: #808695;
  color: #f8f8f9;
}
.banner {
  line-height: 30vh;
  text-align: center;
  font-size: 30px;
}
.banner-text {
  padding: 30px;
  font-size: 15px;
}
.ivu-btn-group {
  display: flex;
  justify-content: center;
}
</style>