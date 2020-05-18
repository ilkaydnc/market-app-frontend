<template>
  <el-card class="transaction-result box-card">
    <el-row class="inputs" :gutter="10">
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
          class="clear-button"
          type="info"
          icon="el-icon-refresh-left"
          @click="clearValue"
        ></el-button>
      </el-col>
    </el-row>
    <el-row class="amount-button-container" :gutter="10">
      <el-col v-for="amount in amountValues" :key="amount" :span="4">
        <el-button
          class="amount-button"
          type="primary"
          @click="increase(amount)"
          >{{ amount }}</el-button
        >
      </el-col>
    </el-row>
    <el-button-group class="button-container">
      <el-button
        v-for="result in resultButtons"
        :key="result.title"
        class="button"
        :type="result.type"
        :loading="result.loading"
        @click="clickResult(result.id)"
        >{{ result.title }}</el-button
      >
    </el-button-group>
  </el-card>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'TransactionResult',
  data: () => ({
    amountValues: [5, 10, 20, 50, 100, 200],
    resultButtons: [
      {
        id: 1,
        title: 'Satış',
        type: 'success',
        loading: false,
      },
      {
        id: 2,
        title: 'Pos',
        type: 'primary',
        loading: false,
      },
      {
        id: 3,
        title: 'Veresiye',
        type: 'warning',
        loading: false,
      },
    ],
    loading: true,
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
    clickResult(id) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        this.resultButtons.find((item) => item.id === id).loading = true

        setTimeout(() => {
          this.$nuxt.$loading.finish()
          this.resultButtons.find((item) => item.id === id).loading = false
        }, 3000)
      })
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

<style lang="scss">
.transaction-result {
  .inputs {
    input {
      text-align: center;
      font-size: 32px;
      font-weight: 700;
    }
  }

  .large-input-label {
    display: block;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 500;
    color: var(--secondary-text-color);
  }

  .amount-button-container {
    display: none;
    margin-top: 10px;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }

  .amount-button {
    width: 100%;
    text-align: center;
    padding: 8px 0;
  }

  .color-danger {
    input {
      color: var(--danger-color);
    }
  }

  .color-success {
    input {
      color: var(--success-color);
    }
  }

  .button {
    width: 100%;
    height: 56px;
    font-size: 18px !important;
    font-weight: 500 !important;
    text-align: center;
    padding: 10px 0;
  }

  .clear-button {
    height: 56px;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-size: 24px !important;
  }

  @media (min-width: 992px) {
    .amount-button-container {
      display: block;
    }
  }
}
</style>
