<template>
  <div class="home-collection">
    <h1 class="title">COLLECTION</h1>
    <h3 class="subtitle">集運試算</h3>
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="80"
    >
      <FormItem label="集貨站" prop="cargo">
        <RadioGroup v-model="formValidate.cargo">
          <Radio label="china">大陸</Radio>
          <Radio label="japan">日本</Radio>
          <Radio label="korea">韓國</Radio>
          <Radio label="america">美國</Radio>
          <Radio label="germany">德國</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="實重" prop="weight">
        <InputNumber :min="1" v-model="formValidate.weight" /> KG
      </FormItem>
      <FormItem label="長" prop="long">
        <InputNumber :min="1" v-model="formValidate.long" /> 公分
      </FormItem>
      <FormItem label="寬" prop="width">
        <InputNumber :min="1" v-model="formValidate.width" /> 公分
      </FormItem>
      <FormItem label="高" prop="height">
        <InputNumber :min="1" v-model="formValidate.height" /> 公分
      </FormItem>
      <FormItem label="材積重">
        <h1>{{ volumeWeight }} KG</h1>
        (長 x 寬 x 高 / 6000)
      </FormItem>
      <div class="button-wrap">
        <Button type="primary" @click="handleSubmit('formValidate')"
          >計算</Button
        >
        <Button @click="handleReset('formValidate')">重設</Button>
      </div>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      volumeWeight: 0,
      formValidate: {
        cargo: 0,
        weight: 0,
        long: 0,
        width: 0,
        height: 0,
      },
      ruleValidate: {
        cargo: [
          {
            required: true,
            message: "請選擇地區",
            trigger: "change",
          },
        ],
        weight: [
          {
            required: true,
            type: "number",
            message: "請填數值",
            trigger: "change",
          },
        ],
        long: [
          {
            required: true,
            type: "number",
            message: "請填數值",
            trigger: "change",
          },
        ],
        width: [
          {
            required: true,
            type: "number",
            message: "請填數值",
            trigger: "change",
          },
        ],
        height: [
          {
            required: true,
            type: "number",
            message: "請填數值",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let volumeWeight =
            (this.formValidate.long *
              this.formValidate.width *
              this.formValidate.height) /
            6000;
          this.volumeWeight = Math.round(volumeWeight);
          this.$Message.success(`Success!<br/>材積重${this.volumeWeight}`);
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
<style scoped>
.home-collection {
  padding: 30px 0;
}
.title {
  font-size: 25px;
  text-align: center;
}
.subtitle {
  font-size: 20px;
  padding-bottom: 10px;
  text-align: center;
}
.button-wrap {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 24px;
}
</style>