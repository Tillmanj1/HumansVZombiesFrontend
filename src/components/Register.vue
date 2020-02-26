<template>
  <div class="regi">

    <br>

    <h1> Signup: </h1> 

    <form method = "post" action="models/Users.js">
      <label for = "fname"> First Name: </label>
      <input type = "text" id = "fname">  
    <p>
      <label for = "lname"> Last Name: </label>
      <input type = "text" id = "lname"> 
    <p>  
      <label for = "email"> Email: </label> 
      <input type = "text" id = "email">
    <p>
      <label for = "user"> Username: </label>
      <input type = "text" id = "user">
    <p>
      <label for = "pass"> Password: </label>
      <input type = "text" id = "myPass">
    </p>
    <input type = "submit" value = "Enter">
    </form>
    
     
  </div>
</template>

<script>
export default {
  name: 'Register',
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
