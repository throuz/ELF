<template>
  <div class="layout">
    <Layout>
      <Affix>
        <Header>
          <HeaderContent />
        </Header>
      </Affix>
      <Content>
        <router-view />
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
    <BackTop />
  </div>
</template>
<script>
import HeaderContent from "@/components/HeaderContent.vue";

export default {
  components: { HeaderContent },
};
</script>

<style scoped>
.ivu-layout-header {
  padding: 0;
}
</style>