const state = {
    count1: 1
}
const actions = {
    add1({ commit }) {
        commit('increase1')
    }
}
const mutations = {
    increase1(state, payload) {
        state.count1 += 1
    }
}
const getters = {}

const search = {
    state,
    actions,
    mutations,
    getters
}

export default search