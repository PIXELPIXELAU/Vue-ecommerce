import { ActionTree } from 'vuex'
import { Account, AccountState, RootState, CommitFunction } from '../types'
import router from '@/router'
import Axios, { AxiosError, AxiosResponse } from 'axios'

export const actions: ActionTree<AccountState, RootState> = {
    async login({ commit }: CommitFunction ) {
        // Temporary user data
        const url = 'https://randomuser.me/api/'
        await Axios
            .get(url)
            .then((response: AxiosResponse) => {
                const payload = {
                    name: `${response.data.results[0].name.first} ${response.data.results[0].name.last}`,
                    email: response.data.results[0].email,
                    image: response.data.results[0].picture.thumbnail,
                    uid: response.data.results[0].login.uuid,
                    users: ['']
                }
                commit('setAccount', payload)
                router.push('/')
            })
            .catch((error: AxiosError) => {
                console.log('XHR error loading account data',error.message)
                commit('setAccountError')
        });
    }
}