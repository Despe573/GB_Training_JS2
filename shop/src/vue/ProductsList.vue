<template>
  <div class="cardsWrap">
    <ProductItem v-for="id in getItemsOnPage" :id="id" :key="id" />
    <Button @clicked="loadMoreData">Показать еще</Button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductItem from "./ProductItem.vue";
import Button from "./button.vue";

export default {
  components: {
    ProductItem,
    Button,
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    ...mapActions(["requestData"]),

    loadMoreData() {
      this.page++;
      this.requestData(this.page);
    },
  },

  computed: {
    ...mapGetters(["getItemsOnPage"]),
  },

  created() {
    this.loadMoreData();
  },
};
</script>

<style>
</style>