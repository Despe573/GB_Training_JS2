import Vue from 'vue';
import loadform from './loadform.vue';
import store from './js/vuexStore.js';

new Vue({
    el: 'main',
    template: '<loadform />',
    components: {
        loadform,
    },
    store,
})