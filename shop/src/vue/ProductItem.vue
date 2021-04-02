<template>
  <div class="card">
    <img :src="getItemData.img" />
    <br />
    {{ getItemData.name }} - {{ getItemData.price }}
    <br />
    <Button @clicked="add">Добавить в корзину</Button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "./button.vue";


export default {
  components: {
    Button,
  },
  props: {
    id: String,
  },
  methods: {
    ...mapActions(["addToCart"]),

    add() {
      this.addToCart(this.id);
    },
  },

  computed: {
    ...mapGetters(["getData"]),

    getItemData() {
      return this.getData[this.id];
    },
  },
};
</script>

<style>
</style>