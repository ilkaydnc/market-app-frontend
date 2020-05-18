<template>
  <div
    :class="toggle ? 'main-menu open' : 'main-menu'"
    @mouseenter="toggle = true"
    @mouseleave="toggle = false"
    @click="toggle = false"
  >
    <div class="menu-header">
      <nuxt-link to="/profile">
        <div class="menu-item">
          <div>
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </div>
          <transition name="fade">
            <span v-if="toggle">İlkay Dinç</span>
          </transition>
        </div>
      </nuxt-link>
    </div>
    <ul class="menu-container">
      <nuxt-link
        v-for="(item, index) in menu_1"
        :key="index"
        :to="'/' + item.link"
      >
        <li class="menu-item">
          <i :class="item.icon"></i>
          <transition name="fade">
            <span v-if="toggle">{{ item.title }}</span>
          </transition>
        </li>
      </nuxt-link>
    </ul>
    <ul class="bottom-menu-container">
      <nuxt-link
        v-for="(item, index) in menu_2"
        :key="index"
        :to="'/' + item.link"
      >
        <li class="menu-item">
          <i :class="item.icon"></i>
          <transition name="fade">
            <span v-if="toggle">{{ item.title }}</span>
          </transition>
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    toggle: false,
    menu_1: [
      {
        icon: 'el-icon-house',
        title: 'Ana Sayfa',
        link: '',
      },
      {
        icon: 'el-icon-shopping-cart-1',
        title: 'Satış Yap',
        link: 'sales',
      },
      {
        icon: 'el-icon-box',
        title: 'Ürünler',
        link: 'products',
      },
      {
        icon: 'el-icon-user',
        title: 'Müşteriler',
        link: 'users',
      },
      {
        icon: 'el-icon-office-building',
        title: 'Firmalar',
        link: 'companies',
      },
      {
        icon: 'el-icon-s-data',
        title: 'İstatistikler',
        link: 'statistics',
      },
    ],
    menu_2: [
      {
        icon: 'el-icon-chat-line-square',
        title: 'İletişim',
        link: 'contact',
      },
      {
        icon: 'el-icon-setting',
        title: 'Ayarlar',
        link: 'settings',
      },
      {
        icon: 'el-icon-info',
        title: 'Yardım',
        link: 'help',
      },
      {
        icon: 'el-icon-download',
        title: 'Çıkış Yap',
        link: 'signin',
      },
    ],
  }),
  methods: {
    errorHandler() {
      return true
    },
  },
}
</script>

<style>
.main-menu {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: space-between;
  width: 64px;
  height: 100vh;
  padding: 8px 0;
  background-color: var(--primary-color);
  transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  overflow: hidden;
  z-index: 10;
}

.open {
  width: 224px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.menu-header .menu-item {
  padding: 8px;
}

.el-avatar--circle {
  transition: border-radius 0.4s;
}

.open .el-avatar--circle {
  border-radius: 20%;
  transition: 0.4s;
}
.menu-header .el-avatar {
  width: 48px;
  height: 48px;
}

.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex: 5;
}

.bottom-menu-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex: 1;
}

.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 64px;
  overflow: hidden;
  color: #ffffff;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: 0.3s;
}

.menu-item:active {
  background-color: #3992eb;
  cursor: pointer;
  transition: 0.1s;
}

.menu-item i {
  font-size: 32px;
}

.menu-item > span {
  white-space: nowrap;
  line-height: 32px;
  font-weight: 400;
  width: 128px;
  margin-left: 16px;
  font-size: 1.1rem;
}

.fade-leave-active {
  transition: 0.1s;
}

.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nuxt-link-exact-active .menu-item {
  background-color: var(--extra-light-border-color) !important;
  color: var(--regular-text-color);
  transition: 0.4s;
}

.menu-header .menu-item div {
  width: 48px;
  height: 48px;
}

.bottom-menu-container a:last-child li i {
  transform: rotate(90deg);
}

@media (min-width: 992px) {
  .main-menu {
    display: flex;
  }
}
</style>
