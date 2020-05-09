<template>
  <el-row :gutter="10" class="container">
    <el-col :sm="24" :md="14" :lg="14" :xl="16" class="sales-left-side">
      <el-card class="box-card">
        <AddProductField />
      </el-card>
    </el-col>
    <el-col :sm="24" :md="10" :lg="10" :xl="8" class="sales-rigth-side">
      <el-card class="box-card">
        <TransactionResult />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'

import AddProductField from '@/components/Sales/AddProductField'
import TransactionResult from '@/components/Sales/TransactionResult'

export default {
  name: 'Sales',
  components: {
    AddProductField,
    TransactionResult,
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
  height: 64px;
  line-height: 64px;
}

.sales-left-side {
  margin-bottom: 10px;
}
@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}

@media (min-width: 1920px) {
}
</style>
