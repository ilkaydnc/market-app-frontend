<template>
  <el-card class="box-card">
    <div class="transaction-result">
      <el-row class="transaction-result-inputs" :gutter="10">
        <el-col :xs="8" :sm="8" :md="7">
          <label class="large-input-label" for="paid">Ödenen</label>
          <el-input
            id="paid"
            :value="paid"
            class="el-input--large"
            min="0"
            type="number"
            @input="setPaid"
          ></el-input>
        </el-col>
        <el-col :xs="8" :sm="8" :md="7">
          <label class="large-input-label" for="total">Tutar</label>
          <el-input
            id="total"
            :value="total"
            class="el-input--large"
            min="0"
            type="number"
          />
        </el-col>
        <el-col :xs="8" :sm="8" :md="7">
          <label class="large-input-label" for="remaining">Kalan</label>
          <el-input
            id="remaining"
            :value="remaining"
            :class="`el-input--large ${setRemainingColor()}`"
            min="0"
            type="number"
          />
        </el-col>
        <el-col class="hidden-sm-and-down" :span="3">
          <label class="large-input-label" for="clear-button">&nbsp;</label>
          <el-button
            id="clear-button"
            class="transaction-result-clear-button"
            type="info"
            icon="el-icon-refresh-left"
            @click="clearValue"
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
  </el-card>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

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
    ...mapGetters('sales', ['remaining']),
    ...mapState('sales', ['paid', 'total']),
  },
  methods: {
    ...mapMutations('sales', {
      increase: 'INCREASE_PAID',
      setPaid: 'SET_PAID',
    }),
    clearValue() {
      this.$store.dispatch('sales/clearValue')
    },
    setRemainingColor() {
      return this.remaining < 0
        ? 'color-danger'
        : this.remaining === 0
        ? ''
        : 'color-success'
    },
  },
}
</script>

<style>
.transaction-result-inputs input {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
}

.large-input-label {
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
  color: var(--secondary-text-color);
}

.transaction-result-amount-button-container,
.transaction-result-button-container {
  margin-top: 10px;
}

.transaction-result-amount-button {
  width: 100%;
  text-align: center;
  padding: 8px 0;
}

.color-danger input {
  color: var(--danger-color);
}

.color-success input {
  color: var(--success-color);
}

.transaction-result-button {
  width: 100%;
  height: 56px;
  font-size: 18px !important;
  font-weight: 500 !important;
  text-align: center;
  padding: 10px 0;
}

.transaction-result-clear-button {
  height: 56px;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 24px !important;
}
</style>
