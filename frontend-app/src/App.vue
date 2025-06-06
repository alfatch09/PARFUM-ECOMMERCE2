<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="/">Perfume Store</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/products">Products</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <b-nav-item to="/cart">Cart</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" v-if="!isLoggedIn">Login</b-nav-item>
          <b-nav-item @click="logout" v-if="isLoggedIn">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isAuthenticated'
    })
  },
  methods: {
    ...mapActions({
      logoutUser: 'user/logout'
    }),
    logout() {
      this.logoutUser()
      this.$router.push('/')
    }
  },
  methods: {
  logout() {
    localStorage.removeItem('auth')
    this.$router.push('/login')
  }
 }

}
</script>

<style>
body {
  background-color: #f7f7f7;
}
</style>
