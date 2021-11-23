<template>
  <div class="container">
    User Profile
    <div>Name {{ name }}</div>
    <div>Email {{ email }}</div>
    <button class="btn btn-primary" v-on:click="logoutev">
      Logout
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'Profile',
  data() {
    return {
      name: localStorage.user_name,
      email: localStorage.email,
    };
  },
  methods: {
    ...mapActions('user', {
      logout: 'logout',
    }),
    logoutev() {
      this.logout();
      this.$router.push('/');
    },
  },
};
</script>
<style>
</style>