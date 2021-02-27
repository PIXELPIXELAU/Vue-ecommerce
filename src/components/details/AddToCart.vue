<template>
  <div class="row">
    <div class="col-3">
      <label class="sr-only" for="inlineFormInputName2">Quantity</label>
      <input type="number" v-model="quantity" class="form-control mb-2 mr-sm-2" />
    </div>
    <button
      v-if="!isInCartProp"
      @click.stop="addCartItem({product, quantity})"
      type="button"
      class="btn btn-primary btn-lg btn-block col-9"
    >ADD TO CART</button>
    <button
      v-else
      @click.stop="editCartRemoveProduct(product)"
      type="button"
      class="btn btn-primary btn-lg btn-block col-9"
    >REMOVE FROM CART</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  props: ["product"],
  data() {
    return {
      isInCartProp: false,
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters("product", ["getCart"]),
  },
  methods: {
    ...mapMutations("product", ["addCartItem", "editCartRemoveProduct"]),

    isInCart(id) {
      const cart = this.getCart
      if(cart) {
        for (let index = 0; index < cart.length; index++) {
          const element = cart[index].product;
          if (element.id === id) {
            return true;
          }
        }
      }
      return false;
    },
  },
  watch: {
    product(val) {
      this.isInCartProp = this.isInCart(val.id);
    },
    getCart() {
      this.isInCartProp = this.isInCart(this.product.id);
    },
    quantity(val) {
      if (val <= 0) {
        this.quantity = 1;
      }
      this.product.quantity = val
    },
  },
};
</script>

<style>
</style>