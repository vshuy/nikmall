/* eslint-disable */
<template lang="">
  <div class="text-center">
    <main class="form-signin">
      <form @submit.prevent="login()">
        <img class="mb-4" src="../../assets/js.png" alt="" height="auto" width="100px">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input type="email" :value="email" class="form-control" @input="setEmail" placeholder="name@ex.com">
        </div>
        <div class="form-floating mt-3">
          <input type="password" :value="password" class="form-control" @input="setPassword" placeholder="Password">
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary">Sign in</button>
        <span style="color:red;">{{information_process}}</span>
      </form>
    </main>
  </div>
</template>
<script>
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
    }),
  },
  computed: {
    ...mapState('user', {
      email: (state) => state.email,
      password: (state) => state.password,
      information_process: (state) => state.information_process,
    }),
  },
};
</script>
<style scoped src="../../assets/css/signin.css"></style>
<style scoped>
.testtext {
  color: red;
}
</style>
