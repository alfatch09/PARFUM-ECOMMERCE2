<template>
  <b-container class="my-5">
    <b-card class="p-4" style="max-width: 400px; margin: 0 auto;">
      <h3 class="text-center mb-4">Login</h3>
      <b-form @submit.prevent="handleLogin">
        <b-form-group label="Username" label-for="username">
          <b-form-input id="username" v-model="username" required />
        </b-form-group>
        <b-form-group label="Password" label-for="password">
          <b-form-input
            id="password"
            type="password"
            v-model="password"
            required
          />
        </b-form-group>
        <b-button type="submit" variant="primary" block>Login</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Login dummy: username = admin, password = 1234
      if (this.username === 'admin' && this.password === '1234') {
        localStorage.setItem('auth', 'true')
        this.$router.push(this.$route.query.redirect || '/')
      } else {
        alert('Username atau Password salah!')
      }
    }
  }
}
</script>
