<template>
    <div 
      class="CardContainer"
      >
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

<style lang="scss">
  .CardContainer{
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    opacity: 0;
    animation: fadeInCardContainer 2s forwards;

  }

@keyframes fadeInCardContainer {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>