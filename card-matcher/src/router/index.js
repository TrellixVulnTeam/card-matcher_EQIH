import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game.vue'
import Welcome from '@/components/Welcome.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
      }
  ]
})