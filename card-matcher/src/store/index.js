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
    loosingLifeStatus: false,
    gameCompleted: false,
    chosenLives: 7,
    gameInitialized: false,
    numCards: 6,
    gameSetupStatus: false,
  },
  mutations: {
    //Set Lists
    setFlippedStatusList(state, list) {
      state.flippedStatusList = list;
    },
    setCardList(state, list) {
      state.cardList = list;
    },
    setVisibilityList(state, list) {
      state.visibilityList = list;
    },

    //Set Status
    setProgressStatus(state, status) {
      state.checkInProgress = status;
    },
    setLoosingLifeStatus(state, status) {
      state.loosingLifeStatus = status;
    },
    setGameInitializedStatus(state, status) {
      state.gameInitialized = status;
    },
    setGameSetupStatus(state, status) {
      state.gameSetupStatus = status;
    },
    setGameCompletedStatus(state, status) {
      state.gameCompleted = status;
    },

    //Set Values
    setLives(state, lives) {
      state.chosenLives = lives;
    },
    setNumCards(state, numCards) {
      state.numCards = numCards;
    },
    initializeLives(state) {
      state.lives = state.chosenLives;
    },
    decreaseLives(state) {
      state.lives = state.lives - 1;
    },

    //Toggle
    toggleCard(state, index) {
      state.flippedStatusList.splice(index, 1, !state.flippedStatusList[index])
    },
    toggleVisibility(state, index) {
      state.visibilityList.splice(index, 1, !state.visibilityList[index])
    }
  },
  actions: {
    initializeGame({state, commit}) {
      commit('setGameSetupStatus', true)
      commit('setGameInitializedStatus', true);
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
        commit('setGameCompletedStatus', false);
        commit('setGameSetupStatus', false)
      }, 1500)
    },
    restoreDefault({commit}) {
      commit('setGameCompletedStatus', false);
      commit('setGameInitializedStatus', false);
    }
  },
});
