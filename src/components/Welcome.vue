<template>
    <div class="Welcome">
        <h1 class="Welcome__title">
            <div class="Welcome__title-section">
                <span class="Welcome__letter Welcome__letter--letter1">C</span>
                <span class="Welcome__letter Welcome__letter--letter2">
                    <div class="Welcome__card">
                        <div class="Welcome__card-inner">
                            <div class="Welcome__card-front">
                                <font-awesome-icon :icon="['fas', 'question']" style="font-size: 24px;"/>
                            </div>
                            <div class="Welcome__card-back">
                                A
                            </div>  
                        </div>
                    </div>
                </span>
                <span class="Welcome__letter Welcome__letter--letter3">R</span>
                <span class="Welcome__letter Welcome__letter--letter4">D</span>
            </div>
            <div class="Welcome__title-section">
                <span class="Welcome__letter Welcome__letter--letter5">M</span>
                <span class="Welcome__letter Welcome__letter--letter6" >
                    <div class="Welcome__card">
                        <div class="Welcome__card-inner">
                            <div class="Welcome__card-front">
                                <font-awesome-icon :icon="['fas', 'question']" style="font-size: 24px;"/>
                            </div>
                            <div class="Welcome__card-back">
                                A
                            </div>  
                        </div>
                    </div>
                </span>
                <span class="Welcome__letter Welcome__letter--letter7">T</span>
                <span class="Welcome__letter Welcome__letter--letter8">C</span>
                <span class="Welcome__letter Welcome__letter--letter9">H</span>
                <span class="Welcome__letter Welcome__letter--letter10">E</span>
                <span class="Welcome__letter Welcome__letter--letter11">R</span>
            </div>
        </h1>
        <BubbleBackground />
        <div class="Welcome__options">
            <label for="cards">Cards: <b style="color: #0375FF">{{ numCards }}</b></label>
            <input type="range" name="cards" min="4" :max="maxCardLength" step="2" v-model="numCards"/>
            <br>
            <label for="lives">Lives: <b style="color: #0375FF">{{ lives }}</b></label>
            <input type="range" name="lives" min="1" max="20" v-model="lives" step="2"/>
            <br>
            <a class="Welcome__start-button-wrapper" @click="startGame()">
                <font-awesome-icon :icon="['fas', 'play']" class="Welcome__start-button"/>
            </a>
        </div>
        <CreatedBy class="Welcome__created-by"/>
    </div>
</template>

<script>
import { MAX_LENGTH } from '../logic/gameInit.js';
import { mapActions } from 'vuex';
import CreatedBy from './CreatedBy.vue';
import BubbleBackground from './BubbleBackground.vue'

export default {
    name: 'Welcome',
    methods: {
        ...mapActions(['initializeGame']),
        startGame() {
            this.initializeGame();
            this.$router.push({name: 'Game'})
        }
    },
    components: {
        CreatedBy,
        BubbleBackground,
    },
    computed: {
        lives: {
            get () {
                return this.$store.state.chosenLives;
            },
            set (value) {
                this.$store.commit('setLives', Number(value))
            }
        },
        numCards: {
            get() {
                return this.$store.state.numCards;
            },
            set (value) {
                this.$store.commit('setNumCards', Number(value));
            }
        },
        maxCardLength() {
            return MAX_LENGTH * 2;

        }
    }   
}
</script>

<style lang="scss">
$letters: 11;

.Welcome {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Varela', sans-serif;
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);

    &__created-by {
        opacity: 0;
        animation: fadeInCreatedBy 8s ease-out forwards;
    }
    &__title {
        font-size: 60px;
        animation: slideup 7.5s ease-in-out forwards;
        z-index: 3;
    }

    &__options {
        font-family: 'Varela', sans-serif;
        z-index: 4;
        opacity: 0;
        animation: fadeInOptions 7.5s ease-out forwards;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FAFAFA;
    }
    &__start-button-wrapper{
        cursor: pointer;
        padding: 20px;
        width: 30px;
        height: 40px;
        margin-top: 40px;
    }

    &__start-button{
        position: absolute;
        border: 1px white solid;
        border-radius: 40px;
        padding: 16px;
        font-size: 24px;
        color: white;
        transition: all .2s ease-in-out;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 21px;
        height: 24px;
        bottom: 25%;

        &:hover {
            color: green;
            border-color: green;
            transform: scale(1.1);
        }
    }

    &__letter {
        @for $i from 1 through $letters {
            $seconds: $i / 2;
            &--letter#{$i} {
                color: blue;
                animation: bouncein #{$seconds}s ease-out;
                padding: 10px;
            }
        }

        &--special {
            border: 1px solid black;
        }
    }

    &__card {
        background-color: transparent;
        width: 50px;
        height: 70px;
        line-height: 60px;
        perspective: 200px;
        transition: opacity 1s;
        display: inline-block;
    }

    &__card-inner{
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 1.2s;
        transform-style: preserve-3d;
        background: transparent;
        border-radius: 10px;
        border: 3px solid black;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        animation: flipAndRemoveBorder 7.5s ease-out forwards;
        transition: border-color 4.5s ease-out;
        margin-top: 9px;
    }

    &__letter--letter6 &__card-inner{
        animation: flipAndRemoveBorderDelayed 7.5s ease-out forwards;
    }

    &__letter--letter5{
        margin-left: 30px;
    } 

    &__card-front, &__card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        border-radius: 6px;
    }   

    &__card-front {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #D71920;
    }  


    &__card-back {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        transform: rotateY(180deg);
        font-size: 60px;
        color: blue;
    }
}

@keyframes bouncein  {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@keyframes flipAndRemoveBorder {
    0% {
        transform: rotateY(0);
    }

    26% {
        transform: rotateY(0);
    }

    34% {
        transform: rotateY(180deg);
        border-color: black;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

    40% {
        transform: rotateY(180deg);
        border-color: black;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

    60% {
        border-color: rgba(0, 0, 0, 0);
        transform: rotateY(180deg);
        box-shadow: 0 0 0 transparent;
    }
    
    100% {
        border-color: rgba(0, 0, 0, 0);
        transform: rotateY(180deg);
        box-shadow: 0 0 0 transparent;
    }


}

@keyframes flipAndRemoveBorderDelayed {
    0% {
        transform: rotateY(0);
    }

    32% {
        transform: rotateY(0);
    }

    40% {
        transform: rotateY(180deg);
        border-color: black;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

    60% {
        border-color: rgba(0, 0, 0, 0);
        transform: rotateY(180deg);
        box-shadow: 0 0 0 transparent;
    }
    
    100% {
        border-color: rgba(0, 0, 0, 0);
        transform: rotateY(180deg);
        box-shadow: 0 0 0 transparent;
    }


}

@keyframes slideup {
    0% {
        transform: translateY(0px);
    }

    40% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(-80px);
    }
}

@keyframes square {
    0% { 
        transform: translateY(0); 
        opacity: 1;
    }
    90%{ 
        opacity: 1;                
    }
    100% { 
        transform: translateY(-700px) rotate(600deg); 
        opacity: 0;
        }
}

@keyframes fadeInOptions {
    70% {
        opacity: 0;
        transform: translateY(300px)
    }

    100% {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes fadeInCreatedBy {
    90%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
}

</style>