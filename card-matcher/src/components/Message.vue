<template>
    <div 
        v-if="status"
        class="Message"> 
            Success!
    </div>
</template>

<script>

export default {
    name: 'Message',
    props: {
        status: Boolean,
    }
}

</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
.Message{
  font-size: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  animation: flyin 3s ease-out;
  font-family: 'Oswald', sans-serif;
}

@keyframes flyin {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}

</style>