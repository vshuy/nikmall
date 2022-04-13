/* eslint-disable */
<template>
  <div class="text-center">
    <div class="container">
      <div class="row"><Header></Header></div>
    </div>
    <main class="form-signin">
      <form @submit.prevent="login()">
        <img
          class="mb-4"
          src="../../assets/js.png"
          alt=""
          height="auto"
          width="100px"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input
            type="email"
            name="email"
            :class="{ 'form-control input': true,'border border-danger': errors.has('email') }"
            v-validate="'required|email'"
            :value="email"            
            @input="setEmail"
            placeholder="name@ex.com"
          />
        </div>
        <div v-show="errors.has('email')" class="text-danger">
          {{ errors.first('email') }}
        </div>
        <div class="form-floating mt-3">
          <input
            type="password"
            name="password"
            :value="password"
            v-validate="'required|min:8'"
            :class="{ 'form-control input': true,'border border-danger': errors.has('password') }"
            @input="setPassword"
            placeholder="Password"
          />
        </div>
        <div v-show="errors.has('password')" class="text-danger">
          {{ errors.first('password') }}
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary">Sign in</button>
        <div class="login-register">
          <router-link to="/register">create an account</router-link>
        </div>
        <span style="color: red">{{ information_process }}</span>
      </form>
      <span v-for="(value, index) in errors_response" :key="index" style="color: red">
        {{ value[0] }}
      </span>
    </main>
  </div>
</template>
<script>
import Header from './../../components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'Login',
  metaInfo: {
    title: 'Login page',
  },
  methods: {
    ...mapActions('user', {
      login: 'login',
    }),
    ...mapMutations('user', {
      setEmail: 'setEmail',
      setPassword: 'setPassword',
      reFreshStatus: 'reFreshStatus',
    }),
  },
  computed: {
    ...mapState('user', {
      email: (state) => state.email,
      password: (state) => state.password,
      information_process: (state) => state.information_process,
      errors_response: (state) => state.errors_response,
    }),
  },
  components: {
    Header,
  },
  mounted() {
    this.reFreshStatus();
  },
};
</script>
<style scoped src="../../assets/css/signin.css"></style>
<style scoped>
.testtext {
  color: red;
}
</style>
