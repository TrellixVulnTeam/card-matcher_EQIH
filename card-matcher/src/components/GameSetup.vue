<template>
    <div class="GameSetup">
        <span class="GameSetup__text">Loading game</span>
        <span class="GameSetup__period">.</span>
        <span class="GameSetup__period">.</span>
        <span class="GameSetup__period">.</span>
    </div>
</template>

<script>
export default {
    name: 'GameSetup',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Varela&display=swap');
.GameSetup{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(0,0,0,0.8);
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Varela', sans-serif;
    font-size: 20px;

    &__text{
        padding-right: 2px;
    }
    &__period:nth-child(2){
        opacity: 0;
        animation: periodfade1 1.5s infinite;
    }

    &__period:nth-child(3){
        opacity: 0;
        animation: periodfade2 1.5s infinite;
    }

    &__period:nth-child(4){
        opacity: 0;
        animation: periodfade3 1.5s infinite;
    }
}



@keyframes periodfade1{
    24%{
        opacity: 0;
    }
    25%{
        opacity: 1;
    }
    99%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}

@keyframes periodfade2{
    49%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    99%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}

@keyframes periodfade3{
    74%{
        opacity: 0;
    }
    75%{
        opacity: 1;
    }
    99%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>