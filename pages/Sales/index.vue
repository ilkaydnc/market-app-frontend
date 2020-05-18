<template>
  <el-row :gutter="10" class="container">
    <el-col :sm="24" :md="14" :lg="14" :xl="16" class="sales-left-side">
      <AddProductField />
      <Cart />
    </el-col>
    <el-col :sm="24" :md="10" :lg="10" :xl="8" class="sales-rigth-side">
      <TransactionResult />
      <ProductShortcuts />
    </el-col>
  </el-row>
</template>

<script>
import AddProductField from '@/components/Sales/AddProductField'
import TransactionResult from '@/components/Sales/TransactionResult'
import ProductShortcuts from '@/components/Sales/ProductShortcuts'
import Cart from '@/components/Sales/Cart'

export default {
  name: 'Sales',
  components: {
    AddProductField,
    TransactionResult,
    ProductShortcuts,
    Cart,
  },
}
</script>
<style>
.el-input--large input::-webkit-outer-spin-button,
.el-input--large input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.el-input--large input[type='number'] {
  -moz-appearance: textfield;
}

.el-input--large {
  font-size: 22px;
}

.el-input--large input {
  height: 56px;
  line-height: 56px;
}

.large-input-label {
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
  color: var(--secondary-text-color);
}

.sales-left-side {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin-bottom: 10px;
}

.sales-rigth-side {
  display: none;
  flex-direction: column;
}

.box-card {
  margin-bottom: 10px;
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .sales-rigth-side {
    display: flex;
  }
}

@media (min-width: 1200px) {
}

@media (min-width: 1920px) {
}
</style>
