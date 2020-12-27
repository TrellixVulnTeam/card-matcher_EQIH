<template>
    <span class="CreatedBy"> 
        Created by 
        <a class="CreatedBy__link" href="https://github.com/AndrewDame">
            Andrew Dame
        </a>
    </span>
</template>

<script>

export default {
    name: 'CreatedBy',
}

</script>

<style lang="scss">
.CreatedBy{
    position: absolute;
    bottom: 0;
    color: rgba(255,255,255,0.8);
    font-family: 'Varela', sans-serif;
    margin-bottom: 40px;
    z-index: 5;

    &__link {
        text-decoration: none;
        color: blue;
    }
}

</style>