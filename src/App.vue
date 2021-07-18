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
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
    <BackTop />
  </div>
</template>
<script>
import HeaderContent from "@/components/HeaderContent.vue";
import FooterContent from "@/components/FooterContent.vue";

export default {
  components: { HeaderContent, FooterContent },
};
</script>

<style scoped>
.ivu-layout-header,
.ivu-layout-footer {
  padding: 0;
}
</style>