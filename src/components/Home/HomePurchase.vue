<template>
  <div class="home-purchase">
    <h1 class="title">DIAGUO</h1>
    <h3 class="subtitle">代購試算</h3>
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="130"
    >
      <FormItem label="國家" prop="country">
        <RadioGroup v-model="formValidate.country" @on-change="changeCurrency">
          <Radio label="日幣">日本</Radio>
          <Radio label="韓元">韓國</Radio>
          <Radio label="美金">美國</Radio>
          <Radio label="歐元">德國</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="商品購買金額" prop="amount">
        <InputNumber :min="1" v-model="formValidate.amount" /> {{ currency }}
      </FormItem>
      <FormItem label="預估當地運費" prop="freight">
        <InputNumber :min="1" v-model="formValidate.freight" /> {{ currency }}
      </FormItem>
      <FormItem label="銀行轉帳手續費" prop="transferFee">
        <InputNumber :min="1" v-model="formValidate.transferFee" disabled />
        {{ currency }}
      </FormItem>
      <FormItem label="代購服務費" prop="serviceFee">
        <InputNumber :min="1" v-model="formValidate.serviceFee" disabled />
        {{ currency }}
      </FormItem>
      <FormItem label="預估台幣費用">
        <h1>{{ estimatedCost }} 台幣</h1>
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
      currency: "",
      estimatedCost: 0,
      formValidate: {
        country: 0,
        amount: 0,
        freight: 0,
        transferFee: 0,
        serviceFee: 0,
      },
      ruleValidate: {
        country: [
          {
            required: true,
            message: "請選擇地區",
            trigger: "change",
          },
        ],
        amount: [
          {
            required: true,
            type: "number",
            message: "請填數值",
            trigger: "change",
          },
        ],
        freight: [
          {
            required: true,
            type: "number",
            message: "請填數值",
            trigger: "change",
          },
        ],
        transferFee: [
          {
            required: true,
            type: "number",
            message: "請填數值",
            trigger: "change",
          },
        ],
        serviceFee: [
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
          let conversion = 0;
          switch (this.currency) {
            case "日幣":
              conversion = 0.25;
              break;
            case "韓元":
              conversion = 0.024;
              break;
            case "美金":
              conversion = 27.99;
              break;
            case "歐元":
              conversion = 33.04;
              break;
            default:
              break;
          }
          let estimatedCost =
            this.formValidate.amount +
            this.formValidate.freight +
            this.formValidate.transferFee +
            this.formValidate.serviceFee;
          this.estimatedCost = Math.round(estimatedCost * conversion);
          this.$Message.success(`Success!<br/>${this.estimatedCost} 台幣`);
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    changeCurrency(currency) {
      switch (currency) {
        case "日幣":
          this.formValidate.transferFee = 300;
          break;
        case "韓元":
          this.formValidate.transferFee = 1000;
          break;
        case "美金":
          this.formValidate.transferFee = 0;
          break;
        case "歐元":
          this.formValidate.transferFee = 0;
          break;
        default:
          break;
      }
      this.currency = currency;
    },
  },
};
</script>
<style scoped>
.home-purchase {
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
@media screen and (min-width: 765px) {
  .ivu-form {
    width: 400px;
    text-align: center;
    margin: 0 auto;
  }
}
</style>