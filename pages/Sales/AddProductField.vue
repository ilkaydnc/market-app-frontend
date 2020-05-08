<template>
  <div class="sales-barcode">
    <div class="sales-barcode-input">
      <el-input
        v-model="salesBarcodeValue"
        class="el-input--large"
        placeholder="Ürün Barkodu Giriniz"
        min="0"
        type="number"
      >
        <el-button slot="append" icon="el-icon-plus"></el-button>
      </el-input>
    </div>
    <div class="sales-barcode-buttons">
      <div class="sales-barcode-button">
        <el-button type="success" icon="el-icon-search">
          <span class="sales-barcode-button-content">Ürün Ara</span></el-button
        >
      </div>
      <div class="sales-barcode-button">
        <el-button type="primary" icon="el-icon-view">
          <span class="sales-barcode-button-content">Fiyat Gör</span></el-button
        >
      </div>
      <!-- <div class="sales-barcode-button">
                <el-button type="warning" icon="el-icon-printer">
                  <span class="sales-barcode-button-content"
                    >Fişi Yazdır</span
                  ></el-button
                >
              </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    salesBarcodeValue: '',
  }),
}
</script>
<style>
.el-input--large input::-webkit-outer-spin-button,
.el-input--large input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.el-input--large input[type='number'] {
  -moz-appearance: textfield;
}

.sales-barcode {
  display: flex;
  flex-direction: column;
}

.sales-barcode > * {
  height: 100%;
}

.sales-barcode-input {
  flex: 6;
  margin-bottom: 10px;
}

.sales-barcode-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sales-barcode-button * {
  font-size: 16px;
}
.sales-barcode-button {
  margin-left: 0;
}

.sales-barcode-button button {
  height: 64px;
}

.el-input--large {
  font-size: 22px;
}

.el-input--large input {
  height: 64px;
  line-height: 64px;
}

@media (min-width: 768px) {
  .sales-barcode {
    flex-direction: row;
  }

  .sales-barcode-input {
    margin-bottom: 0;
  }

  .sales-barcode-button {
    margin-left: 10px;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}

@media (min-width: 1920px) {
}
</style>
