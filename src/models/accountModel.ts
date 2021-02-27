export interface Account {
  uid: string,
  email: string,
  phone?: string,
  name?: string,
  company?: string,
  image?: string,
  users: [ string ]
}

export class Account implements Account {
  constructor (accountData?: Account) {
    if (accountData) {
      Object.assign(this, accountData)
    }  
  }
}

export interface AccountState {
  user?: Account,
  error: boolean
}
