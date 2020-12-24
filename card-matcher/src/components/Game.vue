<template>
  <div 
    class="Game"
    v-bind:class="{
      'Game--completed': gameStatus,
    }"
  >
    <Message :status="gameStatus"/>
    <Background :status="gameStatus"/>
    <CardContainer />
  </div>
</template>

<script>
import CardContainer from './CardContainer.vue';
import Background from './Background.vue';
import generateCardList from '../logic/gameInit.js';
import Message from './Message.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Game',
  components: {
    CardContainer,
    Background,
    Message,
  },
  methods: {
    ...mapMutations(['setCardList', 'setStatusList', 'toggleCard', 'toggleVisibility', 'setVisibilityList', 'setProgressStatus']),
  },
  computed: mapState({
    numFlippedCards: state => { 
            let redFunc = (acc, currentValue) =>  (currentValue === true? acc + 1 : acc);
            return state.statusList.reduce(redFunc, 0);
    },
    flippedCardList: state => {
      let cardList = []
      state.statusList.forEach((elem, index) => {
        if (elem) {
          cardList.push(index);
        }
      });
      return cardList;
    },
    cardList: state => state.cardList,
    gameStatus: state => {
      let redFunc = (acc, currentValue) => (acc === false? acc : !currentValue);
      return state.visibilityList.reduce(redFunc, true) && !state.checkInProgress;
    },
    checkInProgress: state => state.checkInProgress,
  }),
  mounted: function() {
    let statusList = [];
    let visibilityList = [];
    for (let i = 0; i < 6; ++i) {
      statusList.push(false);
      visibilityList.push(true);
    }
    this.setStatusList(statusList);
    this.setVisibilityList(visibilityList);
    this.setCardList(generateCardList());
  },
  watch: {
    numFlippedCards: function () {
      if (this.numFlippedCards === 2) {
        this.setProgressStatus(true);
        let flippedIndicies = [...this.flippedCardList];
        if (this.$store.state.cardList[flippedIndicies[0]] === this.$store.state.cardList[flippedIndicies[1]]) {
          let maxIndex = Math.max(...flippedIndicies);
          flippedIndicies = flippedIndicies.filter(num => num != maxIndex);
          setTimeout((index1, index2) => {
            this.toggleVisibility(index1);
            this.toggleVisibility(index2);
            setTimeout((index1, index2) => {
              this.toggleCard(index1);
              this.toggleCard(index2);
              this.setProgressStatus(false);
            }, 1000, index1, index2)
          }, 1200, maxIndex, flippedIndicies[0]);
        } else {
          setTimeout(() => {
            this.toggleCard(flippedIndicies[0]);
            this.toggleCard(flippedIndicies[1]);
            setTimeout(() => {
              this.setProgressStatus(false);
            }, 1200);
          }, 1200);
        }
      }
    },
  }
}

</script>

<style lang="scss">

.Game {
    display: table;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #171717;
    color: #000;
    line-height: 1.6;
    position: relative;
    font-family: sans-serif;
    overflow: hidden;
    transition: background-color .8s;

    &--completed {
    background: green !important;
    }

}


* {
    margin: 0;
    padding: 0;
}
</style>