<template>
  <div class="indentation">
    <Button type="info" long @click="clickShow">
      {{ title }}
      <Icon v-if="isShow" type="ios-arrow-up" />
      <Icon v-else type="ios-arrow-down" />
    </Button>
    <transition name="fade">
      <div v-if="isShow" class="contents">
        <img :src="imgPath" :alt="title" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Indentation",
  props: {
    title: String,
    imgName: String,
  },
  data() {
    return {
      isShow: true,
    };
  },
  computed: {
    imgPath() {
      return require(`@/assets/${this.imgName}.png`);
    },
  },
  methods: {
    clickShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.ivu-btn {
  margin-top: 10px;
  font-size: 16px;
}
.contents {
  padding: 20px 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
img {
  width: 100%;
}
</style>