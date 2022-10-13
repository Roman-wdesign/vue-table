import Vue from 'vue'
import Vuex from 'vuex'
import getData from'@/store/modules/getData'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        getData
    }
})
