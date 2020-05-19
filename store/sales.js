import data from '@/assets/placeholder_shortcuts'

export const state = () => ({
  paid: 0,
  total: 0,
  tabs: [],
  cart: [],
})

export const mutations = {
  INCREASE_PAID: (state, payload) => {
    state.paid = Number(state.paid) + payload
  },
  SET_PAID: (state, payload) => {
    state.paid = payload
  },
  SET_TABS: (state, payload) => {
    state.tabs = payload
  },
  ADD_TO_CART: (state, payload) => {
    state.cart = [...state.cart, payload]
  },
  CHANGE_CART_ITEM_COUNT: (state, payload) => {
    const index = state.cart.findIndex(
      (item) => item.barcode === payload.barcode
    )
    const selected = state.cart[index]
    selected.count = Number(payload.newValue) || 0
    selected.total = Number((selected.selling * selected.count).toFixed(4))
  },
  CHANGE_CART_ITEM_SELLING: (state, payload) => {
    const index = state.cart.findIndex(
      (item) => item.barcode === payload.barcode
    )
    const selected = state.cart[index]
    selected.selling = Number(payload.newValue) || 0
    selected.total = Number((selected.selling * selected.count).toFixed(4))
  },
  DELETE_CART_ITEM: (state, payload) => {
    const index = state.cart.findIndex((item) => item.barcode === payload)
    state.cart.splice(index, 1)
  },
  CLEAR_CART: (state) => {
    state.cart = []
    state.paid = 0
  },
}

export const getters = {
  remaining: (state) => {
    return state.paid > 0
      ? Number((state.paid - getters.total(state)).toFixed(2))
      : 0
  },
  shortcuts_loading: (state) => {
    return Boolean(!state.tabs.length)
  },
  total: (state) => {
    return state.cart.reduce((prev, next) => prev + next.total, 0).toFixed(2)
  },
}

export const actions = {
  clearValue({ commit }) {
    commit('SET_PAID', 0)
  },
  getTabs({ commit }) {
    commit('SET_TABS', data.tabs && data.tabs)
  },
  addToCart({ commit, state }, product) {
    const payload = {
      ...product,
      total: product.selling,
    }
    const index = state.cart.findIndex(
      (item) => item.barcode === product.barcode
    )
    if (index >= 0) {
      commit('CHANGE_CART_ITEM_COUNT', {
        ...payload,
        count: state.cart[index].count,
        newValue: state.cart[index].count + 1,
      })
    } else {
      commit('ADD_TO_CART', { ...payload, count: 1 })
    }
  },
}
