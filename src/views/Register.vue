<!-- Registration Form for new players entering the game -->
<template>
    <div class="regi">
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
      <label for = "pass"> Password: </label>
      <input type = "text" id = "myPass">
    </p>
    <input type = "submit" value = "Enter">
    </form>
    </div>
</template>