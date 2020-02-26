<template>
    <b-navbar toggleable = "lg" type = "dark" variant="dark">

    <b-navbar-nav>
      <b-nav-item href="./components/Form.vue">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown left split @click = "goToUrl" text="User" >
        <b-dropdown-item to = "/user" > Account</b-dropdown-item> 
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    
  </b-navbar>
  
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        title: String
    },
    // Creates method that tells application to go to said path upon click
    methods: {
        goToUrl() {
            this.$router.push('/user')
        }
    }
}
</script>

<style scoped>
    
</style>