<template>
  <div>
    <Header />
    <section class="content">
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
export default {
  components: {
    Header,
    ProductsList,
    Cart,
    Footer,
  },
};
</script>

<style>
</style>
