<template>
    <div 
        class="Card" 
        @click="toggleStatus()" 
        v-bind:class="{
            'Card--flipped': isFlipped 
        }"
    >
        <div class="Card__inner">
            <div class="Card__front">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="Card__back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
            </div>  
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            isFlipped: false,
        }
    },
    name: 'HelloWorld',
    props: {
    msg: String
    },
    methods: {
        toggleStatus(){
            this.isFlipped = !this.isFlipped;
        },
    },
    computed: mapState({
    error: state => state.game.error,
    })
}
</script>

<style lang="scss">
    .Card {
        background-color: transparent;
        width: 300px;
        height: 300px;
        perspective: 1000px;
        cursor: pointer;

        &__inner{
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 1.2s;
            transform-style: preserve-3d;
            box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important
        }

        &--flipped &__inner{
            transform: rotateY(180deg);
        }

        &__front, &__back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;
        }

        &__front {
            background-color: #bbb;
            color: black;
        }  

        &__back {
            background-color: dodgerblue;
            color: white;
            transform: rotateY(180deg);
        }
    }   

</style>
