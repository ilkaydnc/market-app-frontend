<template>
  <div class="app-wrapper">
    <Menu />
    <nuxt />
  </div>
</template>

<script>
import Menu from '../components/Menu'
export default {
  components: {
    Menu,
  },
}
</script>

<style>
:root {
  --primary-color: #409eff;
  --success-color: #67c23a;
  --warning-color: #e6a23c;
  --danger-color: #f56c6c;
  --info-color: #909399;
  --primary-text-color: #303133;
  --regular-text-color: #606266;
  --secondary-text-color: #909399;
  --placeholder-text-color: #c0c4cc;
  --base-border-color: #dcdfe6;
  --light-border-color: #e4e7ed;
  --lighter-border-color: #ebeef5;
  --extra-light-border-color: #f2f6fc;
}

html {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--extra-light-border-color);
}

button {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif !important;
  font-weight: 300 !important;
  font-size: 16px !important;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
}

.app-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  max-width: 100vw;
}

.container {
  flex: 1;
  padding: 10px;
}

/* TODO: DELETE AFTER DEVELOPMENT */

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}

/* ------------------------------ */
</style>
