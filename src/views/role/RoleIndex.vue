<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div>
          <h2>Role Management</h2>
        </div>
        <div>
          <router-link class="btn btn-success mb-1" to="/role-create"
            >Create New Role</router-link
          >
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
          <router-link
            class="btn btn-info mr-1"
            :to="{ name: 'role-show', params: { id: item.id } }"
            >Show</router-link
          >
          <router-link
            class="btn btn-primary mr-1"
            :to="{ name: 'role-edit', params: { id: item.id } }"
            >Edit</router-link
          >
          <a class="btn btn-danger" v-on:click="destroy(item.id)" >Delete</a>
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