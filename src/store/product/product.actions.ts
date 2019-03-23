import { isLoading, address } from './product.getters'

// local action paths
export const updateIsLoadingAndStreetAction = 'updateIsLoadingAndStreetAction'
export const anotherAction = 'anotherAction'

export const productActions = {
  // use getters if getter path is local path
  // use rootGetters if getter path is global path
  [updateIsLoadingAndStreetAction]({ dispatch, commit, getters }, payload) {
    commit(isLoading, payload.isLoading)

    console.log('getters[address]', getters[address])
    commit(
      address,
      // manually modify sub-property (address@street)
      { ...getters[address], street: payload.street }
    )

    // dispatch another action
    dispatch(anotherAction)
  },
  [anotherAction]({ commit, getters }) {
    console.log('dispatched by another action!')
  }
}
