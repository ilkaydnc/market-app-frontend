<template>
  <el-row :gutter="10" class="container">
    <el-col :sm="24" :md="14" class="sales-left-side">
      <el-card class="box-card">
        <AddProductField />
      </el-card>
    </el-col>
    <el-col :sm="24" :md="10" class="sales-rigth-side">
      <el-card class="box-card">
        <TransactionResult />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'

import AddProductField from './AddProductField'
import TransactionResult from './TransactionResult'

export default {
  components: {
    AddProductField,
    TransactionResult,
  },
}
</script>
<style>
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
