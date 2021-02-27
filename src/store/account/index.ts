import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { AccountState, RootState } from '../types'

export const state: AccountState = {
  user: undefined,
  error: false
}

const namespaced: boolean = true

export const account: Module<AccountState, RootState> = {
  namespaced,
  state,  
  getters,
  actions,
  mutations
}
