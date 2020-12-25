<template>
    <div
        class="StatusBar"
        v-bind:class="{
            'StatusBar--flashing': loosingLife,
            'StatusBar--completed': status,
        }"
        >
        <div 
            class="StatusBar__panel"
        >
            <font-awesome-icon :icon="['fas', 'heart']" style="font-size: 20px;"/> <span> {{ lives }} </span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "StatusBar",
    props: {
        status: Boolean,
    },
    computed:   
        mapState([
        'loosingLife', 'lives'
    ])
}

</script>

<style lang="scss">
//TODO: Add state and logic/styling to flash red when life decreases, add state for life in general
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
.StatusBar{
    font-family: 'Oswald', sans-serif;
    position: absolute;
    width: 100%;
    top: 0;
    color: white;
    display: flex;
    justify-content: flex-end;
    opacity: 1;
    transition: opacity .5s ease-out;
    z-index: 2;

    &--flashing{
        animation: flash .75s infinite;
    }

    &--completed{
        opacity: 0.1;
    }

    &__panel{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 50px;
        background: #1a73e8;
        text-align: center;
        border-radius: 4px;
        font-size: 18px;
        padding: 5px;
    }

    &__heart{
        font-size: 16px;
        color: red;
    }

    
}

@keyframes flash {
  0%{
    color: white;
  }
  25%{
    color: red;
  }
  100%{
    color: white;
  }
}


</style>