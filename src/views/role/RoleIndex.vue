<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div class="pull-left">
          <h2>Role Management</h2>
        </div>
        <div class="pull-right">
          <a class="btn btn-success mb-1" href="#"> Create New Role</a>
        </div>
      </div>
    </div>
    <table class="table table-bordered">
      <tr>
        <th>No</th>
        <th>Name</th>
        <th width="280px">Action</th>
      </tr>
      <tr v-for="(item, index) in roles" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <a class="btn btn-info mr-1" href="#">Show</a>
          <a class="btn btn-primary mr-1" href="#">Edit</a>
          <a class="btn btn-danger" href="#">Edit</a>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'RoleIndex',
  methods: {
    ...mapActions('role', {
      index: 'index',
      destroy: 'destroy',
    }),
  },
  computed: {
    ...mapState('role', {
      roles: (state) => state.roles,
    }),
  },
  mounted() {
    this.index();
  },
};
</script>
<style>
</style>