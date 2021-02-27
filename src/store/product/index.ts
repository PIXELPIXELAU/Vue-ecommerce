import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { ProductState, RootState } from '../types'

export const state: ProductState = {
  product: undefined,
  list: undefined,
  cart: undefined,
  error: false
}

const namespaced: boolean = true

export const product: Module<ProductState, RootState> = {
  namespaced,
  state,  
  getters,
  actions,
  mutations
}