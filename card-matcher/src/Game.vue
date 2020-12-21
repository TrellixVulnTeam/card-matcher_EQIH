<template>
  <div id="app">
    <CardContainer :cardList="cardList" />
  </div>
</template>

<script>
import CardContainer from './components/CardContainer.vue';
import generateCardList from './logic/gameInit.js'

export default {
  name: 'Game',
  components: {
    CardContainer
  },
  data() {
    return {
      cardList: []
    }
  },
  mounted: function() {
    this.cardList = generateCardList();
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
