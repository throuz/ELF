<template>
  <div class="process">
    <h1 class="title">集運流程</h1>
    <Indentation title="集貨服務流程" :contents="serviceProcess" />
    <Indentation title="進口項目" :contents="ImportItems" />
    <Indentation title="貼心提醒" :contents="reminder" />
  </div>
</template>

<script>
import Indentation from "@/components/Consolidation/Indentation.vue";
import description from "@/assets/description.js";

export default {
  name: "Process",
  components: {
    Indentation,
  },
  data() {
    return {
      serviceProcess: description.serviceProcess,
      ImportItems: description.ImportItems,
      reminder: description.reminder,
    };
  },
};
</script>

<style scoped>
.process {
  padding: 30px 20px;
  max-width: 900px;
  margin: 0 auto;
  font-size: 16px;
}
.title {
  text-align: center;
}
</style>