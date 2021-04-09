<template>
  <div v-show="getItemsOnCart.length !== 0" class="basketWrap">
    <div class="result">
      <p>Ваша корзина:</p>
      <p class="qty">Всего товаров - {{ getItemsOnCart.length }}</p>
      <p class="sum">Сумма Заказа - {{ total }}</p>
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

  methods: {},

  computed: {
    ...mapGetters(["getItemsOnCart", "getData"]),

    total() {
      let result = 0;
      for (let i = 0; i < this.getItemsOnCart.length; i++) {
        result = result + this.getData[this.getItemsOnCart[i]].price;
      }
      return result;
    },
  },
};
</script>

<style>
</style>