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
    lives: 0,
    loosingLife: false,
    gameCompleted: false,
    chosenLives: 7,
    gameInitialized: false,
    numCards: 6,
    gameSetup: false,
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
    setLives(state, lives) {
      state.chosenLives = lives;
    },
    setNumCards(state, numCards) {
      state.numCards = numCards;
    },
    setGameStatus(state, status) {
      state.gameInitialized = status;
    },
    setGameSetupInProgress(state, status) {
      state.gameSetup = status;
    },
    initializeLives(state) {
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
    initializeGame({state, commit}) {
      commit('setGameSetupInProgress', true)
      commit('setGameStatus', true);
      setTimeout(function(){
        let statusList = [];
        let visibilityList = [];
        for (let i = 0; i < state.numCards; ++i) {
          statusList.push(false);
          visibilityList.push(true);
        }
        commit('setFlippedStatusList', statusList);
        commit('setVisibilityList', visibilityList);
        commit('setCardList', generateCardList(state.numCards/2));
        commit('initializeLives');
        commit('setGameCompleted', false);
        commit('setGameSetupInProgress', false)
      }, 1500)
    },
    restoreDefault({commit}) {
      commit('setGameCompleted', false);
      commit('setGameStatus', false);
    }
  },
});
