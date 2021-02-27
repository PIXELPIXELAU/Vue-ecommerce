export interface Product {
  id: string,
  name: string,
  caption?: string,
  description?: string,
  active?: boolean,
  images?: string[],
  price?: string|number
}

export interface CartItem {
  product: Product,
  quantity: number
}

export class Product implements Product {
  constructor (productData?: Product) {
    if (productData) {
      Object.assign(this, productData)
    }
  }
}

export class CartItem implements CartItem {
  constructor (cartData: CartItem) {
    Object.assign(this, cartData)
  }
}

export interface ProductState {
  product?: Product,
  list?: Product[],
  cart?: CartItem[],
  error: boolean
}
