<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import Addresses from "@/views/Addresses.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    // Addresses,
  },
};
</script>
