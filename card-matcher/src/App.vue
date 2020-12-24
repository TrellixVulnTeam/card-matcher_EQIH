<template>
  <div id="#app">
  <Game />
  </div>
</template>

<script>
import Game from './components/Game.vue';

export default {
  name: 'App',
  components: {
    Game
  },
}

</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}
</style>
