<template>
  <el-card class="box-card">
    <div class="sales-barcode">
      <div class="sales-barcode-input">
        <label class="large-input-label" for="barcode">Ürün Barkodu</label>
        <el-input
          id="barcode"
          v-model="salesBarcodeValue"
          class="el-input--large"
          min="0"
          type="number"
        >
        </el-input>
      </div>
      <div class="sales-barcode-buttons">
        <div class="sales-barcode-button">
          <label class="large-input-label" for="sales-search-product"
            >&nbsp;</label
          >
          <el-button
            id="sales-search-product"
            type="success"
            icon="el-icon-search"
          >
            <span class="sales-barcode-button-content">Ürün Ara</span>
          </el-button>
        </div>
        <div class="sales-barcode-button">
          <label class="large-input-label" for="sales-get-product-info"
            >&nbsp;</label
          >
          <el-button
            id="sales-get-product-info"
            type="primary"
            icon="el-icon-view"
          >
            <span class="sales-barcode-button-content">Fiyat Gör</span>
          </el-button>
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
  </el-card>
</template>
<script>
export default {
  data: () => ({
    salesBarcodeValue: '',
  }),
}
</script>
<style>
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

.sales-barcode-input input {
  font-size: 32px;
  font-weight: 700;
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

.sales-barcode-button label {
  display: none;
}

.sales-barcode-button button {
  height: 56px;
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .sales-barcode {
    flex-direction: row;
  }

  .sales-barcode-input {
    margin-bottom: 0;
  }

  .sales-barcode-button {
    margin-left: 10px;
  }

  .sales-barcode-button label {
    display: block;
  }
}

@media (min-width: 1200px) {
}

@media (min-width: 1920px) {
}
</style>
