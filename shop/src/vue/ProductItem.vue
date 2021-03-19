<template>
  <div class="card">
    <img :src="getItemData.img" />
    <br />
    {{ getItemData.name }} - {{ getItemData.price }}
    <br />
    <Button @clicked="addToCart">Добавить в корзину</Button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "./button.vue";

export default {
  components: {
    Button,
  },
  props: {
    id: String,
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