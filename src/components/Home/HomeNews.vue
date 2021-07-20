<template>
  <Carousel loop>
    <CarouselItem v-for="(newsItem, index) in newsData" :key="index">
      <Card dis-hover>
        <p slot="title">
          <Icon type="md-alert" />
          最新消息
        </p>
        <div>{{ newsItem.date }}</div>
        <p>{{ newsItem.content }}</p>
      </Card>
    </CarouselItem>
  </Carousel>
</template>
<script>
export default {
  data() {
    return {
      newsData: [
        {
          date: "2021/07/17",
          content: "Content of card, Content of card, Content of card",
        },
        { date: "2021/07/18", content: "Content of card" },
        {
          date: "2021/07/19",
          content:
            "Content of card, Content of card, Content of cardContent of card, Content of card, Content of cardContent of card, Content of card, Content of cardContent of card, Content of card, Content of card",
        },
      ],
    };
  },
};
</script>
<style scoped>
.ivu-carousel-item {
  padding: 30px 60px;
}
.ivu-card {
  height: 200px;
  overflow: hidden;
}
@media screen and (min-width: 765px) {
  .ivu-carousel {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
