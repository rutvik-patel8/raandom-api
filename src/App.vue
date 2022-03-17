<template>
  <the-header>User Profile</the-header>
  <profile></profile>
</template>

<script>
import TheHeader from "./view/Header.vue"
import Profile from "./components/Profile.vue"
export default {
  name: 'App',
  components:{
     TheHeader,
     Profile
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
