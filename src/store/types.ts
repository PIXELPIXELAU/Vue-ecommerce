import { Commit } from 'vuex'
export { Account, AccountState, Product, CartItem, ProductState } from '@/models'
export interface RootState {
  version: string
}
export interface CommitFunction {
  commit: Commit;
}
export interface CommitStateFunction<T> extends CommitFunction {
  state: T;
}