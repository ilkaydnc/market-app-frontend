<template>
  <el-card class="product-shortcuts box-card">
    <el-tabs v-loading="shortcuts_loading" :data="tabs" tab-position="top">
      <el-tab-pane
        v-for="tab in tabs"
        :key="tab.id"
        class="product-tab-container"
        :label="tab.label"
      >
        <el-tooltip
          v-for="product in tab.products"
          :key="product.barcode"
          class="item"
          :open-delay="1000"
          :content="product.label"
          placement="top"
        >
          <el-button class="product-box" plain @click="addToCart(product)">
            <div class="name">{{ product.label }}</div>
            <div class="selling">{{ product.selling }}</div>
          </el-button>
        </el-tooltip>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'ProductShortcusts',
  computed: {
    ...mapState('sales', ['tabs']),
    ...mapGetters('sales', ['shortcuts_loading']),
  },
  mounted() {
    this.$store.dispatch('sales/getTabs')
  },
  methods: {
    getData() {},
    addToCart(product) {
      this.$store.dispatch('sales/addToCart', product)
    },
  },
}
</script>

<style lang="scss">
.product-shortcuts {
  min-height: 50vh;

  .el-tabs__nav-wrap.is-scrollable {
    padding: 0 30px;
  }

  .el-tabs__nav-prev,
  .el-tabs__nav-next {
    font-size: 24px;
  }

  .el-tabs__content {
    max-height: 40vh;
    overflow-y: auto !important;
    overflow-x: hidden;
  }

  .el-loading-parent--relative {
    height: 40vh;
  }

  .product-tab-container {
    display: grid;
    grid-gap: 5px 5px;
    grid-template-columns: auto auto auto;
    overflow-y: auto !important;
    overflow-x: hidden;
  }

  .el-button + .el-button {
    margin-left: 0;
  }

  .el-button--default {
    font-size: 14px !important;
  }

  .el-button--default {
    padding: 10px 0 !important;

    .name {
      display: inline-block;
      max-width: 120px;
      width: 100%;
      color: var(--regular-text-color);
      font-weight: 700 !important;
      margin-bottom: 4px;
      transition: 0.3s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .selling {
      color: var(--secondary-text-color);
      font-weight: 500 !important;
      transition: 0.3s;
    }
  }

  .el-button--default:hover {
    .name {
      color: var(--primary-color);
      transition: 0.3s;
    }

    .selling {
      color: var(--primary-color);
      transition: 0.3s;
    }
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .product-shortcuts {
    .product-tab-container {
      grid-template-columns: auto auto;
    }
  }
}

@media (min-width: 1200px) {
  .product-shortcuts {
    .product-tab-container {
      grid-template-columns: auto auto auto;
    }
  }
}

@media (min-width: 1920px) {
  .product-shortcuts {
    .product-tab-container {
      grid-template-columns: auto auto auto auto;
    }
  }
}
</style>
