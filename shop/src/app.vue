<template>
  <div>
    <Header />
    <section
      class="content"
      v-bind:class="{ grid: getItemsOnCart.length !== 0 }"
    >
      <ProductsList />
      <Cart />
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from "./vue/header.vue";
import ProductsList from "./vue/ProductsList.vue";
import Cart from "./vue/cart.vue";
import Footer from "./vue/footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    ProductsList,
    Cart,
    Footer,
  },

  computed: {
    ...mapGetters(["getItemsOnCart"]),
  },
};
</script>

<style>
</style>
