<template>
  <div class="form">

     <br>

    <p> Please login below:</p>
    
    <form method = "post" action="models/Users.js">
      <label for="email"> Email: </label> 
      <input type = "text" id= "email">
    <p>
      <label for="pass"> Password: </label>
      <input type= "text" id = "myPass">
    </p>
    <input type = "submit" value = "Enter">
    </form>
    
    <br>

    <router-link to = "/register"> I don't have an account</router-link>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
