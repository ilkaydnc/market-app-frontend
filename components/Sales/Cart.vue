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
        > 
        <el-button
          type="primary"
          plain
          size="medium"
          :disabled="multipleSelection.length ? false : true"
          @click="deleteSelecteds"
        >
          Seçili Ürünleri Sil
        </el-button> -->
        <el-button
          type="primary"
          plain
          size="medium"
          icon="el-icon-plus"
          @click="toggleModal(true)"
        >
          Özel Ürün Ekle</el-button
        >
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
      >
        <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
        <el-table-column property="label" label="İsim"> </el-table-column>
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
              size="small"
              controls-position="right"
              :min="0"
              :step="1.0"
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
              size="small"
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
        return 'muted-row'
      }
      return ''
    },
    deleteItem(index, row) {
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
    toggleModal(isOpen) {
      this.$store.commit('sales/TOGGLE_MODAL', isOpen)
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

    .muted-row {
      color: var(--placeholder-text-color) !important;
    }

    .el-table__body {
      overflow-y: auto;
    }

    .el-input-number--small {
      width: 110px;
    }

    .el-input__inner {
      text-align: left;
      padding-left: 10px;
      padding-right: 42px;
    }
  }
}
</style>
