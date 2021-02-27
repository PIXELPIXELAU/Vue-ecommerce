import { GetterTree } from 'vuex'
import { ProductState, RootState } from '../types'

export const getters: GetterTree<ProductState, RootState> = {
    getItem (state): object {
        if(state.product && !state.error) {
            return state.product
        } else {
            return {}
        }
    },
    getAll (state): object[] {
        if(state.list && !state.error) {
            return state.list
        } else {
            return []
        }
    },
    getJSON (state): string {
        if(state.list && !state.error) {
            return JSON.stringify(state.list)
        } else {
            return ''
        }
    },
    getCart (state): object[] {
        if(state.cart && !state.error) {
            return (state.cart)
        } else {
            return []
        }
    },
    hasCart (state): boolean {
        if(state.cart && !state.error) {
            return (state.cart.length)?true:false
        } else {
            return false
        }
    },
    hasError (state): boolean {
        return !state.error
    },
    hasImage (state): boolean {
        if(state.product && !state.error) {
            return (state.product.images?true:false)
        } else {
            return false
        }
    },
    hasNumericPrice (state): boolean {
        if(state.product && !state.error) {
            return (typeof(state.product.price)=='number'?true:false)
        } else {
            return false
        }
    }

}
