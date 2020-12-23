import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cardList: [],
    statusList: [],
    visibilityList: [],
    checkInProgress: false,
  },
  mutations: {
    setStatusList(state, list) {
      state.statusList = list;
    },
    setCardList(state, list) {
      state.cardList = list;
    },
    setVisibilityList(state, list) {
      state.visibilityList = list;
    },
    setProgressStatus(state, status) {
      state.checkInProgress = status;
    },
    toggleCard(state, index) {
      state.statusList.splice(index, 1, !state.statusList[index])
    },
    toggleVisibility(state, index) {
      state.visibilityList.splice(index, 1, !state.visibilityList[index])
    }
  },
});
