/* eslint-disable */
<template lang="">
  <div class="text-center">
    <!-- <div class="testtext"> test what is going on</div> -->
    <main class="form-signin">
      <form @submit.prevent="handleLogin()">
        <img class="mb-4" src="../assets/js.png" alt="" height="auto" width="100px">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input type="email" v-model="email" class="form-control"  placeholder="name@ex.com">
        </div>
        <div class="form-floating mt-3">
          <input type="password" v-model="password" class="form-control"  placeholder="Password">
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary">Sign in</button>
        <span style="color:red;">{{statuslg}}</span>
      </form>
    </main>
  </div>
</template>
<script>
const axios = require('axios');
import { BASE_URL } from './../api/api.js';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      statuslg: '',
      user_id: '',
    };
  },
  metaInfo: {
    title: 'Login page',
  },
  methods: {
    async getApiLogin() {
      const result = await axios.post(`${BASE_URL}/api/login`, {
        email: this.email,
        password: this.password,
      });
      return result.data;
    },
    async handleLogin() {
      const token = await this.getApiLogin();
      console.log('Info log: ~ token', token);
      this.$cookies.set('status_login', token.status, '720h');
      if (token.status === true) {
        this.$cookies.set('token', 'Bearer ' + token.token, '720h');
        this.$cookies.set('user_id', token.user_if.id, '720h');
        this.$cookies.set('user_name', token.user_if.name, '720h');
        this.user_id = token.user_if.id;
        this.statuslg = 'Login success';
        if (token.user_if.id === 1) {
          this.$router.push('/dashboardproduct');
        } else {
          this.$router.push('/');
        }
      } else {
        this.statuslg = 'Login failse';
      }
    },
  },
};
</script>
<style scoped src="../assets/css/signin.css"></style>
<style scoped>
.testtext {
  color: red;
}
</style>
