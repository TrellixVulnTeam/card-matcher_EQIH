<template>
    <div class="CardContainer">
      <Card 
        v-for="(itemName, index) in cardList"
        :key="index"
        :listIndex="index"
        :className="itemName"
        />
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import { mapState } from 'vuex'

export default {
    name: 'CardContainer',
    components: {
        Card
    },
    computed: {
      ...mapState(['cardList', 'statusList'])
    }
}

</script>

<style>
  .CardContainer{
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

  }
#app {
}
</style>