export const state = () => ({
  paid: 0,
  total: 32,
})

export const mutations = {
  INCREASE_PAID(state, payload) {
    state.paid = Number(state.paid) + payload
  },
  SET_PAID(state, payload) {
    state.paid = payload
  },
}

export const getters = {
  remaining: (state) => {
    return state.paid > 0 ? state.paid - state.total : 0
  },
}

export const actions = {
  clearValue({ commit }) {
    commit('SET_PAID', 0)
  },
}
