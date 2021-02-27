import { MutationTree } from 'vuex'
import { Account, AccountState } from '../types'

export const mutations: MutationTree<AccountState> = {
    setAccount(state: AccountState, payload: Account) {
        state.user = payload
        state.error = false
    },
    setAccountError(state: AccountState) {
        state.user = undefined
        state.error = true
    }
}
