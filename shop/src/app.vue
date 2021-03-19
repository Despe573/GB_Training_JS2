<template>
  <div>
    <Header />
    <section class="content">
      <ProductsList />
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from "./vue/header.vue";
import ProductsList from "./vue/ProductsList.vue";

import Footer from "./vue/footer.vue";
export default {
  components: {
    Header,
    ProductsList,

    Footer,
  },
};
</script>

<style>
</style>
