// local getter paths
export const mobile = 'mobile'
export const isLoading = 'isLoading'
export const address = 'address'
export const street = 'address@street'
export const formatAddress = 'formatAddress'
export const formatAddressAndIsLoading = 'formatAddressAndIsLoading'

export const productGetters = {
  // custom getter
  [formatAddress](state) {
    return `${state.address.country}, ${state.address.city}, ${
      state.address.street
    }`
  },
  // use other getter
  [formatAddressAndIsLoading](state, getters) {
    return `${getters[formatAddress]} + ${state.isLoading}
    }`
  }
}
