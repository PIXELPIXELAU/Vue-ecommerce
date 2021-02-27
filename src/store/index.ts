import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'

import { RootState } from './types'
import { account } from './account'
import { product } from './product'

Vue.use(Vuex)


const store: StoreOptions<RootState> = {
  modules: {
    account,
    product,
  }
}

export default new Vuex.Store<RootState>(store)

