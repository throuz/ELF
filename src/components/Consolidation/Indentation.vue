<template>
  <div class="indentation">
    <Button type="info" long @click="clickShow">
      {{ title }}
      <Icon v-if="isShow" type="ios-arrow-up" />
      <Icon v-else type="ios-arrow-down" />
    </Button>
    <transition name="fade">
      <div v-if="isShow" class="contents">
        <p v-for="(content, index) in contents" :key="index">
          <Icon type="md-checkmark-circle" />
          {{ content }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Indentation",
  props: {
    title: String,
    contents: Array,
  },
  data() {
    return {
      isShow: true,
    };
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
</style>