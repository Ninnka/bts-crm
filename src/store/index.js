import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    user: {
      name: ''
    },
    bankList: []
  },
  getters: {
    // user: state => state.user,
    // bankList: state => state.bankList
    user () {
      return this.$store.state.user;
    },
    bankList () {
      return this.$store.state.bankList;
    }
  },
  actions,
  mutations,
  strict: debug
});
