export default {
  updateUser (state, payload) {
    state.user = payload;
  },
  updateBankList (state, payload) {
    state.bankList = payload;
  },
  addBankList (state, payload) {
    state.bankList.push(payload);
  },
  updateModifyMt (state, payload) {
    state.bankList.push(payload);
  }
};
