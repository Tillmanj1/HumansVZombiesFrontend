<template>
  <div id="app">
    
    <Navbar title = "HvZ" />
    
    <br>

    <img alt="hvz logo" src="./assets/hvzlogo.png">
    <HelloWorld msg="Welcome to Humans vs. Zombies!!!"/>
    <router-view/>

    <br>
    
  </div>
</template>

<script>
// Imports the Navigation component created
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  comments: {
    Navbar
  },
  components: {Navbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
