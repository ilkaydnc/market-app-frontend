<template>
  <el-card class="cart box-card">
    <div class="top-buttons">
      <div class="list-info">
        <span class="list-info-text"
          ><span class="list-info-text-count">{{ tableData.length }}</span> ürün
          eklendi.</span
        >
      </div>
      <div>
        <!-- <el-button type="info" plain icon="el-icon-printer" size="medium"
          >Listeyi Yazdır</el-button
        > -->
        <el-button
          type="primary"
          plain
          size="medium"
          :disabled="multipleSelection.length ? false : true"
          @click="deleteSelecteds"
        >
          Seçili Ürünleri Sil
        </el-button>
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="medium"
          :disabled="tableData.length ? false : true"
          @click="clearCart"
        >
          Sepeti Temizle
        </el-button>
      </div>
    </div>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        height="50vh"
        empty-text="Ürün Eklenmedi!"
        stripe
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column property="barcode" label="Barkod" width="120">
        </el-table-column>
        <el-table-column property="name" label="İsim" sortable>
        </el-table-column>
        <el-table-column
          property="selling"
          label="Satış"
          width="120"
          align="center"
          header-align="center"
        >
          <template slot-scope="scope">
            <el-input-number
              :value="scope.row.selling"
              size="mini"
              controls-position="right"
              :min="0"
              :step="0.25"
              @change="
                handleChange($event, scope.row, 'CHANGE_CART_ITEM_SELLING')
              "
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          property="count"
          label="Miktar"
          width="120"
          align="center"
          header-align="center"
        >
          <template slot-scope="scope">
            <el-input-number
              :value="scope.row.count"
              size="mini"
              controls-position="right"
              :min="0.0"
              :step="1.0"
              @change="
                handleChange($event, scope.row, 'CHANGE_CART_ITEM_COUNT')
              "
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          property="total"
          label="Tutar"
          width="120"
          align="center"
          header-align="center"
        >
          <template> </template>
        </el-table-column>
        <el-table-column label="İşlem" width="80" align="center">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="mini"
              plain
              @click="deleteItem(scope.$index, scope.row)"
            >
              Sil
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      multipleSelection: [],
    }
  },
  computed: {
    tableData() {
      return this.$store.state.sales.cart
    },
  },
  methods: {
    handleChange(e, row, mutation) {
      this.$store.commit(`sales/${mutation}`, { ...row, newValue: e })
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.count === 0) {
        return 'danger-row'
      }
      return ''
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    deleteItem(index, row) {
      this.$store.commit('sales/DELETE_CART_ITEM', row.barcode)
      this.$notify({
        type: 'success',
        message: 'Ürün silindi!',
        position: 'bottom-right',
      })
    },
    clearCart() {
      this.$confirm('Sepeti temizlemek istediğine emin misin?', 'Uyarı', {
        confirmButtonText: 'Onayla',
        confirmButtonClass: 'el-button--danger',
        cancelButtonText: 'İptal Et',
        type: 'error',
      })
        .then(() => {
          this.$store.commit('sales/CLEAR_CART')
          this.$notify({
            type: 'success',
            message: 'Sepet temizlendi!',
            position: 'bottom-right',
          })
        })
        .catch(() => {})
    },
    deleteSelecteds() {
      this.multipleSelection.map((item) => {
        this.$store.commit('sales/DELETE_CART_ITEM', item.barcode)
      })
      this.$notify({
        type: 'success',
        message: 'Seçili ürünler silindi!',
        position: 'bottom-right',
      })
    },
  },
}
</script>

<style lang="scss">
.cart {
  .top-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .list-info {
      display: flex;
      align-items: center;
      height: 37px;
    }

    .list-info-text {
      font-size: 15px;
      color: var(--secondary-text-color);
    }

    .list-info-text-count {
      color: var(--secondary-text-color);
      font-weight: 700;
    }
  }

  .el-table {
    border: 1px solid var(--lighter-border-color);
    .el-table__header-wrapper {
      position: sticky;
      top: 0;
      left: 0;
      background-color: var(--lighter-border-color) !important;
    }

    .danger-row {
      color: var(--placeholder-text-color) !important;
    }

    .el-table__body {
      overflow-y: auto;
    }

    .el-input-number--mini {
      width: 100px;
    }
  }
}
</style>
