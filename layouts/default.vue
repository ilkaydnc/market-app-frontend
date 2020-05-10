<template>
  <div class="app-wrapper">
    <Menu />
    <transition name="page">
      <nuxt />
    </transition>
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
  position: relative;
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.2s;
}
.page-enter {
  opacity: 0;
  transform: scale(0.95);
}

.page-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (min-width: 768px) {
  .container {
    margin-left: 64px !important;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}

@media (min-width: 1920px) {
}
</style>
