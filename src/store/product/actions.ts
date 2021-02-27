import { ActionTree } from 'vuex'
import { Product, ProductState, RootState, CommitFunction } from '../types'
// import router from '@/router'
import Axios, { AxiosError, AxiosResponse } from 'axios'

export const actions: ActionTree<ProductState, RootState> = {
    async getProducts({ commit }: CommitFunction) {
        const url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products"
        Axios
            .get(url)
            .then((response: AxiosResponse) => {
                let products: Product[] = []
                response.data.forEach((item:any) => {
                    const detail = {
                        id: item.id,
                        name: item.name,
                        description: item.content,
                        active: true,
                        images: [item.imageUrl],
                        price: item.price
                    }
                    products.push(detail)                        
                });
                commit('setProductList', products)
            })
            .catch((error: AxiosError) => {
                console.log(error.message)
                commit('setProductError')
            })
    },
    async getDetails({ commit }: CommitFunction, id: string) {
        const url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products"
        Axios
            .get(url, { params: { id: id } })
            .then((response: AxiosResponse) => {
                const item = response.data[0]
                const detail = {
                    id: item.id,
                    name: item.name,
                    description: item.content,
                    active: true,
                    images: [item.imageUrl],
                    price: item.price
                }
                commit('setProduct', detail)
            })
            .catch((error: AxiosError) => {
                console.log(error.message)
                commit('setProductError')
            })
    }
}
