import Vue from 'vue';
import App from './app.vue';
import store from './js/vuexStore.js';

new Vue({
    el: 'main',
    template: '<App />',
    components: {
        App,
    },
    store,
})