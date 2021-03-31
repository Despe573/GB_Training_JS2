<template>
  <div class="basketWrap">
    <div class="result">
      <p>Ваша корзина:</p>
      <p class="qty">Всего товаров - {{ getItemsOnCart.length }}</p>
      <p class="sum">Сумма Заказа - {{ total() }}</p>
      <button class="cardButton order">Оформить заказ</button>
    </div>
    <CartItem v-for="id in getItemsOnCart" :id="id" :key="id" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "./button.vue";
import CartItem from "./CartItem.vue";

export default {
  components: {
    Button,
    CartItem,
  },
  methods: {
    total() {
      let result = 0;
      for (let i = 0; i < this.getItemsOnCart.length; i++) {
        result = result + this.ItemData(this.getItemsOnCart[i]).price;
      }
      console.log(result);
    },
  },
  computed: {
    ...mapGetters(["getItemsOnCart"], ["getData"]),

    ItemData(id) {
      return this.getData[id];
    },
  },
};
</script>

<style>
</style>