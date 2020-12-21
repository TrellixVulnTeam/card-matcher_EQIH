<template>
    <div class="CardContainer">
      <Card 
        v-for="(item, index) in cardList"
        :key="index"
        :className="item"
        />
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'CardContainer',
  components: {
    Card
  },
  props: {
        cardList: Array,
    },
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