import { MutationTree } from 'vuex'
import { Product, CartItem, ProductState } from '../types'

export const mutations: MutationTree<ProductState> = {
    setProductList(state: ProductState, payload: Product[]) {
        state.list = payload
        state.error = false
    },
    setProduct(state: ProductState, payload: Product) {
        state.product = payload
        state.error = false
    },
    setCart(state: ProductState, payload: CartItem[]) {
        state.cart = payload
        state.error = false
    },
    setProductError(state: ProductState) {
        state.error = true
    },
    addCartItem(state: ProductState, payload: CartItem) {
        let cart:CartItem[] = state.cart?state.cart:[]
        let itemIndex = 0
        for (let index = 0; index < cart.length; index++) {
            itemIndex = (cart[index].product.id == payload.product.id)?index:itemIndex
        }
        if(itemIndex) {
            cart[itemIndex] = {product: payload.product, quantity: (1*cart[itemIndex].quantity + 1*payload.quantity)}
        } else {
            cart.push(payload)                
        }
        state.cart = cart
        state.error = false
    },
    editCartItemQuantity(state:ProductState, payload: CartItem) {
        let cart:CartItem[] = state.cart?state.cart:[]
        for (let index = 0; index < cart.length; index++) {
            if(cart[index].product.id == payload.product.id) {
                cart[index] = {product: cart[index].product, quantity: 1*payload.quantity}
            }
        }
        state.cart = cart
        state.error = false
    },
    editCartRemoveProduct(state:ProductState, payload: Product) {
        let cart:CartItem[] = state.cart?state.cart:[]
        let newCart:CartItem[] = []
        for (let index = 0; index < cart.length; index++) {
            const item = cart[index];
            if (item.product.id !== payload.id) {
                newCart.push(item)
            }
        }
        state.cart = newCart
        state.error = false
    },
    editCartRemoveAll(state:ProductState) {
        let cart:CartItem[] = []
        state.cart = cart
        state.error = false
    }
}
// export function setLoad(state, val) {
//     state.uploadingData = val
// }
