import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        itemsOnCart: [],
    },
    mutations: {
        setData(state, payload) {
            state.data = { ...state.data, ...payload.newData };
            state.itemsOnPage.push(...Object.keys(payload.newData));
        },

        addItemsToCart(state, payload) {
            state.itemsOnCart.push(payload);
        },

        delItemsToCart(state, payload) {
            state.itemsOnCart = state.itemsOnCart.filter(function (value) {
                return value != payload
            });
        },
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getItemsOnCart: state => state.itemsOnCart,
    },
    actions: {
        requestData({ commit }, page) {
            // fetch(`/database/data${page}.json`)
            fetch(`/datalist/${page}`, {
                method: 'GET',
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', { newData: res });
                });
        },

        addToCart({ commit }, data) {
            commit('addItemsToCart', data);
        },

        delToCart({ commit }, data) {
            commit('delItemsToCart', data);
        },

        addItemToData({ }, data) {
            fetch('/datalist', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                })
        },
    },
});