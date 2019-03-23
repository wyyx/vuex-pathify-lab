import * as actions from './product.actions'
import * as getters from './product.getters'

export const modulePath = 'product/'

// global property paths
export const mobile = modulePath + getters.mobile
export const isLoading = modulePath + getters.isLoading
export const address = modulePath + getters.address
export const street = modulePath + getters.street
export const formatAddress = modulePath + getters.formatAddress
export const formatAddressAndIsLoading =
  modulePath + getters.formatAddressAndIsLoading

// global action paths
export const updateIsLoadingAndStreetAction =
  modulePath + actions.updateIsLoadingAndStreetAction
