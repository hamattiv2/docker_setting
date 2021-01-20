<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Addresses/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Addresses from '@/components/Addresses.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Addresses
  }
}
</script>
