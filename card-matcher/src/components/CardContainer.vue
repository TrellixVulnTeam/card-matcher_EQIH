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
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

  }
#app {
}
</style>