import { GetterTree } from 'vuex'
import { AccountState, RootState } from '../types'

export const getters: GetterTree<AccountState, RootState> = {
    getUser (state): object {
        if(state.user && !state.error) {
            return state.user
        } else {
            return {}
        }
    },
    hasError (state): boolean {
        return !state.error
    },
    hasImage (state): boolean {
        if(state.user && !state.error) {
            return (state.user.image?true:false)
        } else {
            return false
        }
    },
    hasPhone (state): boolean {
        if(state.user && !state.error) {
            return (state.user.phone?true:false)
        } else {
            return false
        }
    }

}
