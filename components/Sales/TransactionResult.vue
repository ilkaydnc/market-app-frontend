<template>
  <div class="transaction-result">
    <el-row class="transaction-result-inputs" :gutter="10">
      <el-col :xs="8" :sm="8" :md="7">
        <el-input
          :value="paidValue"
          class="el-input--large"
          placeholder=""
          min="0"
          type="number"
          @input="setPaidValue"
        />
      </el-col>
      <el-col :xs="8" :sm="8" :md="7">
        <el-input
          :value="totalValue"
          class="el-input--large"
          placeholder=""
          min="0"
          type="number"
        />
      </el-col>
      <el-col :xs="8" :sm="8" :md="7">
        <el-input
          :value="remainingValue"
          class="el-input--large"
          placeholder=""
          min="0"
          type="number"
        />
      </el-col>
      <el-col class="hidden-sm-and-down" :span="3">
        <el-button
          class="transaction-result-clear-button"
          type="danger"
          icon="el-icon-refresh-left"
          @click="clear"
        ></el-button>
      </el-col>
    </el-row>
    <el-row class="transaction-result-amount-button-container" :gutter="10">
      <el-col v-for="amount in amountValues" :key="amount" :span="4">
        <el-button
          class="transaction-result-amount-button"
          type="primary"
          @click="increase(amount)"
          >{{ amount }}</el-button
        >
      </el-col>
    </el-row>
    <el-row class="transaction-result-button-container" :gutter="10">
      <el-col v-for="result in resultButtons" :key="result.title" :span="6">
        <el-button
          class="transaction-result-button"
          :type="result.type"
          @click="result.submit"
          >{{ result.title }}</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data: () => ({
    amountValues: [5, 10, 20, 50, 100, 200],
    resultButtons: [
      {
        title: 'Satış',
        type: 'success',
        submit: () => {
          // code here
        },
      },
      {
        title: 'Pos',
        type: 'primary',
        submit: () => {
          // code here
        },
      },
      {
        title: 'Veresiye',
        type: 'warning',
        submit: () => {
          // code here
        },
      },
      {
        title: 'Parçalı',
        type: 'danger',
        submit: () => {
          // code here
        },
      },
    ],
  }),
  computed: {
    ...mapState({
      paidValue: (state) => state.sales.paidValue,
      totalValue: (state) => state.sales.totalValue,
      remainingValue: (state) => state.sales.remainingValue,
    }),
  },
  methods: {
    ...mapMutations({
      increase: 'sales/INCREASE_PAID_VALUE',
      setPaidValue: 'sales/SET_PAID_VALUE',
      clear: 'sales/CLEAR_VALUE',
    }),
  },
}
</script>

<style>
.transaction-result-inputs input {
  text-align: center;
  font-size: 32px;
}

.transaction-result-amount-button-container {
  margin-top: 10px;
}

.transaction-result-button-container {
  margin-top: 20px;
}

.transaction-result-amount-button {
  width: 100%;
  text-align: center;
  padding: 10px 0;
}

.transaction-result-button {
  width: 100%;
  height: 64px;
  font-size: 18px !important;
  font-weight: 500 !important;
  text-align: center;
  padding: 10px 0;
}

.transaction-result-clear-button {
  height: 64px;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 24px !important;
}
</style>
