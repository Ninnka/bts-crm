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
    bankList: [],
    MtList: [
      {
        id: '56735671',
        pas: '',
        leverage: '1:100',
        mainAccount: false,
        status: false
      },
      {
        id: '56735672',
        pas: '',
        leverage: '1:100',
        mainAccount: false,
        status: false
      },
      {
        id: '56735673',
        pas: '',
        leverage: '1:100',
        mainAccount: false,
        status: false
      }
    ]
  },
  getters: {
    // user: state => state.user,
    // bankList: state => state.bankList
    user (state) {
      return state.user;
    },
    bankList (state) {
      return state.bankList;
    },
    MtList (state) {
      return state.MtList;
    }
  },
  actions,
  mutations,
  strict: debug
});
