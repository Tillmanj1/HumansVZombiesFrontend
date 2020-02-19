<template>
  <div class="form">

     

    <p> Please login below:</p>
    
    <form method = "post" action="models/Users.js"> 
      Username: <input type = "text" name= "UserName">
    <p>
      Password: <input type= "text" name = "myPass">
    </p>
    <input type = "submit" value = "Enter">
    </form>
  </div>
</template>

<script>
export default {
  name: 'form',
  components: {
    
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
