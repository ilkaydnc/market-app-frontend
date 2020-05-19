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
    selected.count = Number(payload.newValue)
    selected.total = selected.selling * selected.count
  },
  CHANGE_CART_ITEM_SELLING: (state, payload) => {
    const index = state.cart.findIndex(
      (item) => item.barcode === payload.barcode
    )
    const selected = state.cart[index]
    selected.selling = Number(payload.newValue)
    selected.total = selected.selling * selected.count
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
    return state.paid > 0 ? state.paid - getters.total(state) : 0
  },
  shortcuts_loading: (state) => {
    return Boolean(!state.tabs.length)
  },
  total: (state) => {
    return state.cart.reduce((prev, next) => prev + next.total, 0)
  },
}

export const actions = {
  clearValue({ commit }) {
    commit('SET_PAID', 0)
  },
  getTabs({ commit }) {
    setTimeout(() => {
      commit('SET_TABS', [
        {
          id: 1,
          label: 'Ana Ürünler',
          products: [
            {
              barcode: 1234123423,
              name: 'Ekmek',
              selling: 1.25,
            },
            {
              barcode: 4564565454,
              name: 'Su',
              selling: 1.0,
            },
          ],
        },
      ])
    }, 500)
  },
  addToCart({ commit, state }, product) {
    const payload = {
      ...product,
      label: product.name,
      count: 1,
      total: product.selling,
    }
    const index = state.cart.findIndex(
      (item) => item.barcode === payload.barcode
    )
    if (index >= 0) {
      commit('CHANGE_CART_ITEM_COUNT', {
        ...payload,
        newValue: payload.count + 1,
      })
    } else {
      commit('ADD_TO_CART', payload)
    }
  },
}
