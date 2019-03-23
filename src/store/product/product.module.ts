import { make } from 'vuex-pathify'
import { productActions } from './product.actions'
import { productGetters } from './product.getters'

export interface Address {
  country: string
  city: string
  street: string
}

export interface ProductState {
  mobile: string
  products: []
  isLoading: boolean
  address: Address
}

export const productInitialState: ProductState = {
  mobile: '15566663333',
  products: [],
  isLoading: false,
  address: {
    country: 'China',
    city: 'ChengDu',
    street: 'People road'
  }
}

const autoMutations = make.mutations(productInitialState)
export const autoGetters = make.getters(productInitialState)

export const product = {
  namespaced: true,
  state: productInitialState,
  mutations: {
    ...autoMutations
  },
  actions: productActions,
  getters: { ...autoGetters, ...productGetters }
}
