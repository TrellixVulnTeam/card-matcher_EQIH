import Vuex from 'vuex';
import Vue from 'vue';
import generateCardList from '../logic/gameInit.js';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cardList: [],
    flippedStatusList: [],
    visibilityList: [],
    checkInProgress: false,
    lives: 1,
    loosingLife: false,
    gameCompleted: false,
    chosenLives: 7,
    gameInitialized: false,
  },
  mutations: {
    setFlippedStatusList(state, list) {
      state.flippedStatusList = list;
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
    setLoosingLifeStatus(state, status) {
      state.loosingLife = status;
    },
    setLives(state) {
      state.lives = state.chosenLives;
    },
    decreaseLives(state) {
      state.lives = state.lives - 1;
    },
    setGameCompleted(state, status) {
      state.gameCompleted = status;
    },
    toggleCard(state, index) {
      state.flippedStatusList.splice(index, 1, !state.flippedStatusList[index])
    },
    toggleVisibility(state, index) {
      state.visibilityList.splice(index, 1, !state.visibilityList[index])
    }
  },
  actions: {
    initializeGame(state) {
      console.log("called")
      let statusList = [];
      let visibilityList = [];
      for (let i = 0; i < 6; ++i) {
        statusList.push(false);
        visibilityList.push(true);
      }
      state.commit('setFlippedStatusList', statusList);
      state.commit('setVisibilityList', visibilityList);
      state.commit('setCardList', generateCardList());
      state.commit('setLives');
      state.commit('setGameCompleted', false);
    }
  },
});
