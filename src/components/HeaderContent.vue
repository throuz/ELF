<template>
  <div class="header-content">
    <Row type="flex" justify="space-between" align="middle">
      <Col span="10" class="layout-logo">一路發集運</Col>
      <Col span="6" class="navIcon">
        <div class="icon-wrap" @click="navClick">
          <Icon v-if="isNavShow" type="md-close" size="40" color="#fff" />
          <Icon v-else type="md-menu" size="40" color="#fff" />
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <Menu
          v-if="isNavShow"
          theme="dark"
          :accordion="true"
          width="auto"
          @on-select="navClick"
        >
          <MenuItem to="/" name="home">首頁</MenuItem>
          <Submenu
            v-for="(navItem, index) in navData"
            :key="index"
            :to="navItem.link"
            :name="index"
          >
            <template slot="title">{{ navItem.name }}</template>
            <MenuItem
              v-for="(subItem, subIndex) in navItem.sub"
              :key="subIndex"
              :to="subItem.link"
              :name="`${index}-${subIndex}`"
            >
              {{ subItem.name }}
            </MenuItem>
          </Submenu>
        </Menu>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "HeaderContent",
  data() {
    return {
      navData: [
        {
          name: "大陸集貨",
          link: "/consolidation",
          sub: [
            { name: "上海集貨介紹", link: "/consolidation" },
            { name: "深圳集貨介紹", link: "/consolidation" },
            { name: "深圳海快介紹", link: "/consolidation" },
          ],
        },
        {
          name: "日韓集貨",
          link: "/consolidation",
          sub: [
            { name: "東京集貨介紹", link: "/consolidation" },
            { name: "大阪集貨介紹", link: "/consolidation" },
            { name: "韓國集貨介紹", link: "/consolidation" },
          ],
        },
        {
          name: "歐美集貨",
          link: "/consolidation",
          sub: [
            { name: "洛杉磯集貨介紹", link: "/consolidation" },
            { name: "波特蘭集貨介紹", link: "/consolidation" },
            { name: "德國海快介紹", link: "/consolidation" },
          ],
        },
        {
          name: "全球代購",
          link: "/purchasing",
          sub: [
            { name: "日本代購教學", link: "/purchasing" },
            { name: "韓國代購教學", link: "/purchasing" },
            { name: "德國代購教學", link: "/purchasing" },
          ],
        },
      ],
      isNavShow: false,
    };
  },
  methods: {
    navClick() {
      this.isNavShow = !this.isNavShow;
    },
  },
};
</script>

<style scoped>
.layout-logo {
  color: aliceblue;
  text-align: center;
  font-size: 20px;
}
.icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ivu-menu {
  background: #000000cc;
  text-align: center;
  color: aliceblue;
  font-size: 18px;
}
.ivu-menu-item {
  font-size: 18px;
}
</style>
