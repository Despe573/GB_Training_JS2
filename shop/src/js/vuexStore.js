import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
    },
    mutations: {
        setData(state, payload) {
            state.data = { ...state.data, ...payload.newData };
            state.itemsOnPage.push(...Object.keys(payload.newData));
        }
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
    },
    actions: {
        requestData({ commit }, page) {
            fetch(`./database/data${page}.json`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', { newData: res });
                });
        }
    },
});