export const state = () => ({
  paidValue: 0,
  totalValue: 32,
  remainingValue: 0,
})

export const mutations = {
  INCREASE_PAID_VALUE(state, payload) {
    state.paidValue = Number(state.paidValue) + Number(payload)
    state.remainingValue =
      state.paidValue > 0 ? state.paidValue - state.totalValue : 0
  },
  SET_PAID_VALUE(state, payload) {
    state.paidValue = Number(payload)
    state.remainingValue =
      state.paidValue > 0 && state.paidValue - state.totalValue
  },
  CLEAR_VALUE(state) {
    state.paidValue = 0
    state.remainingValue = 0
  },
}
