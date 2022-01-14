<template>
  <div class="container">
    
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'RoleEdit',
  methods: {
    ...mapActions('role', {
      index: 'index',
      destroy: 'destroy',
    }),
  },
  computed: {
    ...mapState('role', {
      roles: state => state.roles,
    }),
  },
  mounted() {
    this.index();
  },
};
</script>
<style></style>
