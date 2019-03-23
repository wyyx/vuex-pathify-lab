import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify'
import { product } from './product/product.module'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [pathify.plugin],
  state: {
    user: { name: 'Tom', age: 24 }
  },
  mutations: {},
  actions: {},
  modules: {
    product
  }
})
