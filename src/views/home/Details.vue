<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div v-if="hasImage" class="col-6">
        <div class="card text-left shadow-md">
          <img class="card-img-top" :src="getItem.images[0]" alt />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="display-3">{{ getItem.name }}</div>
        <p class="lead text-justify">{{ getItem.description }}</p>
        <div>
          <p class="h3">Price</p>
          <p class="h2">${{ getItem.price }}</p>
        </div>
        <AddToCart :product="getItem" v-if="getUser.uid" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../../components/details/AddToCart"
export default {
  data () {
    return {
      isInCardProp: false,
    }
  },
  computed: {
    ...mapGetters("account", ["getUser"]),
    ...mapGetters("product", ["getItem", "hasImage"])
  },
  components: { AddToCart },
  methods: {
    ...mapActions("product", ["getDetails"]),
  },
  mounted() {
    this.getDetails(this.$route.params.idProduct);
  }
};
</script>

<style>
.container-fluid {
  padding: 30px;
}
.image-product {
  width: 100%;
}
.card * {
  max-height: 85vh;
}
</style>