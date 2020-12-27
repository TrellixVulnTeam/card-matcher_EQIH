<template>
  <div id="#app">
  <router-view></router-view>
  <GameSetup v-if="gameSetupStatus" />
  </div>
</template>

<script>
import GameSetup from './components/GameSetup.vue';
import {mapState} from 'vuex';
export default {
  name: 'App',
  components: {
    GameSetup,
  },
  computed: {
    ...mapState(['gameSetupStatus'])
  }

}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

html, body {
    width: 100%;
    height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>
