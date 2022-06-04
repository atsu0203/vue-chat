<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ChatMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import ChatMain from '@/components/ChatMain.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
    // ChatMain
  }
}
</script>
