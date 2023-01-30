import { getCategoryList } from "@/api/index"

const state = {
    categoryList: []
}
const actions = {
    async queryCategoryList({ commit }) {
        const categoryList = await getCategoryList();
        commit('CATEGORYLIST', categoryList)
    }
}
const mutations = {
    CATEGORYLIST(state, payload) {
        state.categoryList = payload
    }
}
const getters = {}

const home = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}

export default home