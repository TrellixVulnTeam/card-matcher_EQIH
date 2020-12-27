<template>
  <div 
    class="Game"
    v-bind:class="{
      'Game--success': isSuccess && isGameCompleted,
    }"
  >
    <Message :status="isGameCompleted" :isSuccess="isSuccess"/>
    <StatusBar :status="isGameCompleted" />
    <Background :isSuccess="isSuccess"/>
    <CardContainer />
  </div>
</template>

<script>
import CardContainer from './CardContainer.vue';
import Background from './Background.vue';
import Message from './Message.vue'
import StatusBar from './StatusBar.vue'
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  name: 'Game',
  components: {
    CardContainer,
    Background,
    Message,
    StatusBar,
  },
  methods: {
    ...mapMutations(['setCardList', 'setFlippedStatusList', 'toggleCard', 'toggleVisibility', 'setVisibilityList', 'setProgressStatus', 'setLoosingLifeStatus', 'decreaseLives', 'setGameCompleted']),
    ...mapActions(['initializeGame'])
  },
  computed: {
    ...mapState({
      numFlippedCards: state => { 
              let redFunc = (acc, currentValue) =>  (currentValue === true? acc + 1 : acc);
              return state.flippedStatusList.reduce(redFunc, 0);
      },
      flippedCardList: state => {
        let cardList = []
        state.flippedStatusList.forEach((elem, index) => {
          if (elem) {
            cardList.push(index);
          }
        });
        return cardList;
      },
      isSuccess: state => {
        let redFunc = (acc, currentValue) => (acc === false? acc : !currentValue);
        return state.visibilityList.reduce(redFunc, true) && !state.checkInProgress;
      },
      checkInProgress: state => state.checkInProgress,
      isGameCompleted: state => state.gameCompleted,
      lives: state => state.lives,
    }),
  },
  mounted: function() {
    if (!this.$store.state.gameInitialized) {
      this.$router.push({ name: 'Welcome'});
    }
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
              if (this.isSuccess) {
                this.setGameCompleted(true);
              }
            }, 1000, index1, index2)
          }, 1200, maxIndex, flippedIndicies[0]);
        } else {
          setTimeout(() => {
            this.setLoosingLifeStatus(true);
            this.decreaseLives();
            this.toggleCard(flippedIndicies[0]);
            this.toggleCard(flippedIndicies[1]);
            setTimeout(() => {
              this.setLoosingLifeStatus(false);
              if (this.lives === 0) {
                this.setGameCompleted(true);
              }
              this.setProgressStatus(false);
            }, 1500);
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

    &--success {
    background: green !important;
    }

}


* {
    margin: 0;
    padding: 0;
}
</style>