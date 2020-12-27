<template>
  <div id="#app">
  <router-view></router-view>
  <GameSetup v-if="gameSetup" />
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
    ...mapState(['gameSetup'])
  }

}

</script>

<style lang="scss">


body {
  min-width: 800px;
}

* {
  margin: 0;
  padding: 0;
}
</style>
