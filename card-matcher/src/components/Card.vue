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
                <i class="fas fa-question" style="font-size:70px;"></i>
            </div>
            <div class="Card__back">
                <i v-bind:class="computedClass" style="font-size:70px;"></i>
            </div>  
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data () {
        return {
            isFlipped: false,
        }
    },
    name: 'Card',
    props: {
        className: String
    },
    methods: {
        toggleStatus(){
            this.isFlipped = !this.isFlipped;
        },
    },
    computed: {
        ...mapState({
                error: state => state.game.error,
        }),
        computedClass () {
            return `fas ${this.className}`
        }
    }
}
</script>

<style lang="scss">
    .Card {
        background-color: transparent;
        width: 200px;
        height: 300px;
        perspective: 1000px;
        cursor: pointer;
        margin: 10px 5px;

        &__inner{
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 1.2s;
            transform-style: preserve-3d;
            box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
            background: transparent;
            border-radius: 10px;
            border: 3px solid black;
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
            border-radius: 6px;
        }

        &__front {
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            background: gray;
        }  


        &__back {
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgb(2,0,36);
            background: linear-gradient(170deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 71%);
            transform: rotateY(180deg);
        }
    }   

</style>
