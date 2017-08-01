import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    user: {
      name: 'name'
    },
    bankList: []
  },
  getters: {
    // user: state => state.user,
    // bankList: state => state.bankList
    user (state) {
      return state.user;
    },
    bankList (state) {
      return state.bankList;
    }
  },
  actions,
  mutations,
  strict: debug
});
