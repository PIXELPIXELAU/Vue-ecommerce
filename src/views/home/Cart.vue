<template>
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a
          v-for="item in getCart"
          :key="item.product.id"
          href="#"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <img v-if="item.product.hasImage" :src="item.product.images[0]" alt height="60" width="60" />
          <p class="h4">{{ item.product.name }}</p>
          <div class="row">
            <div class="mr-4">
              <p>Each</p>
              <p>${{ item.product.price }}</p>
            </div>
            <div class="mr-4">
              <p>Qty</p>
              <p>{{ item.quantity }}</p>
            </div>
            <div class="mr-2">
              <p>Total</p>
              <p>${{ item.product.price * item.quantity }}</p>
            </div>
          </div>
        </a>
        <div
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <p class="h4">Total</p>
          <p class="h4">${{ totalPrice }}</p>
        </div>
        <button
          @click="checkout()"
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
        >Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters("product", ["getCart"]),
    ...mapGetters("account", ["getUser"]),
  },
  methods: {
    ...mapMutations("product", ["editCartRemoveAll"]),
    calcPrice() {
      const items = this.getCart
      items.forEach((element) => {
        this.totalPrice += element.product.price * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.editCartRemoveAll();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 2000);
    },
  },
  mounted() {
    console.log(this.getCart)
    this.calcPrice();
  },
};
</script>

<style>
</style>