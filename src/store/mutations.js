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
    state.MtList.forEach((item) => {
      if (item.id === payload.id) {
        item.leverage = payload.leverage;
      }
    });
  },
  addMtList (state, payload) {
    console.log(payload);
    state.MtList.push(payload);
  },
  changeMtMainAccount (state, payload) {
    state.MtList.forEach((item) => {
      if (item.id !== payload.id) {
        item.mainAccount = false;
      }
    });
  },
  changeMtStatus (state, payload) {
    state.MtList.forEach((item) => {
      if (item === payload) {
        item.status = !item.status;
      }
    });
  }
};
