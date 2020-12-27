<template>
    <div 
        class="Background"
        v-bind:class="{
            'Background--success': isSuccess,
        }"
        >
      <div class="Background__single-line"></div>
      <div class="Background__single-line"></div>
      <div class="Background__single-line"></div>
      <div class="Background__single-line"></div>
      <div class="Background__single-line"></div>
    </div>
</template>


<script>

export default {
    name: 'Background',
    props: {
        isSuccess: Boolean,
    }
}

</script>

<style lang="scss">

.Background{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  
    &__single-line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    transition: background-color .5s;

        &::after {
            content: '';
            display: block;
            position: absolute;
            height: 15vh;
            width: 100%;
            top: -50%;
            left: 0;
            background: linear-gradient(to bottom, rgba(255, 00, 0, 0) 0%, #ff0000 75%, #ff0000 100%);
            animation: backgroundLineDrop 7s 0s infinite;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
        }
        
        &:nth-child(1) {
            margin-left: -40%;
            &::after {
            animation-delay: 2s;
            }
        }

        &:nth-child(2) {
            margin-left: -20%;
            &::after {
            animation-delay: 1s;
            }
        }
        
        &:nth-child(4) {
            margin-left: 20%;
            &::after {
            animation-delay: 3s;
            }
        }

        &:nth-child(5) {
            margin-left: 40%;
            &::after {
            animation-delay: 4s;
            }
        }
    }

    &--success &__single-line{
        &::after {
             background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
        }
    }
}
  
    
@keyframes backgroundLineDrop {
  0%{
    top: -50%
  }
  100%{
    top: 110%
  }
}

</style>