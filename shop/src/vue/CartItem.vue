<template>
  <div class="card">
    <img :src="getItemData.img" />
    <br />
    {{ getItemData.name }} - {{ getItemData.price }}
    <br />
    <Button @clicked="del">Удалить из корзины</Button>
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
    ...mapActions(["delToCart"]),

    del() {
      this.delToCart(this.id);
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