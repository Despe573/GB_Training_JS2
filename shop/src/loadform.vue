<template>
  <div>
    <Header />
    <section class="content center">
      <div class="formWrapper">
        <div class="form">
          <label for="name">Имя товара</label>
          <input
            id="name"
            type="text"
            placeholder="Футболка"
            v-model="name"
          /><br />
          <label for="price">Цена товара</label>
          <input
            id="price"
            type="text"
            placeholder="1000"
            v-model="price"
          /><br />
          <label for="img">Путь до картинки товара</label>
          <input
            id="img"
            type="text"
            placeholder="https://picsum.photos/250/250?random=1"
            v-model="img"
          /><br />
          <Button @clicked="addItem">Добавить товар</Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Header from "./vue/header.vue";
import Footer from "./vue/footer.vue";
import Button from "./vue/button.vue";

export default {
  components: {
    Header,
    Footer,
    Button,
  },
  data() {
    return {
      name: "",
      price: "",
      img: "",
    };
  },
  methods: {
    ...mapActions(["addItemToData"]),

    addItem() {
      const item = { name: this.name, price: this.price, img: this.img };
      console.log(item);
    },
  },
};
</script>

<style>
</style>


остановился 40:19