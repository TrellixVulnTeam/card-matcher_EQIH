<template>
    <div 
        class="Card" 
        @click="toggleStatus()" 
        v-bind:class="{
            'Card--flipped': isFlipped,
            'Card--visible' : isVisible,
        }"
    >   
        <div class="Card__inner">
            <div class="Card__front">
                <font-awesome-icon :icon="['fas', 'question']" style="font-size: 50px;"/>
            </div>
            <div class="Card__back">
                <font-awesome-icon :icon="computedClass" style="font-size: 50px;"/>
            </div>  
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'Card',
    props: {
        className: String,
        listIndex: Number,
    },
    methods: {
        ...mapMutations([
            'toggleCard',
        ]),
        toggleStatus(){
            if (!this.checkInProgress) {
                this.toggleCard(this.listIndex);
            }
        },
    },
    computed: {
        isFlipped() {
            return this.$store.state.statusList[this.listIndex];
        },
        isVisible() {
            return this.$store.state.visibilityList[this.listIndex];
        },
        isRendered() {
            return !this.$store.state.cardSuccess[this.listIndex];
        },
        computedClass () {
            return ['fas', this.className]
        },
        ...mapState(['checkInProgress'])
    }
}
</script>

<style lang="scss">
    .Card {
        background-color: transparent;
        width: 200px;
        height: 300px;
        perspective: 1000px;
        margin: 10px 5px;
        opacity: 0;
        transition: opacity 1s;

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
        
        &--flipped &__inner{
            transform: rotateY(180deg);
        }

        &--visible {
            opacity: 1;
            cursor:pointer;
        }
    }   

</style>
