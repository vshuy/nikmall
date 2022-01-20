<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div class="pull-left">
          <h2>Users Management</h2>
        </div>
        <div class="pull-right">
          <router-link class="btn btn-primary" to="/dashboard"
            >Back</router-link
          >
        </div>
      </div>
    </div>
    <table class="table table-bordered">
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Roles</th>
        <th width="280px">Action</th>
      </tr>
      <tr v-for="(item, index) in users" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.roles[0].name }}</td>
        <td>
          <router-link
            class="btn btn-primary"
            :to="{ name: 'assign-role-edit', params: { id: item.id } }"
          >
            Edit this user</router-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'AssignRoleIndex',
  metaInfo: {
    title: 'Assign Role overview',
    script: [],
  },
  methods: {
    ...mapMutations('assign_role', {
      // setName: 'setName',
    }),
    ...mapActions('assign_role', {
      index: 'index',
    }),
  },
  computed: {
    ...mapState('assign_role', {
      users: (state) => state.users,
    }),
  },
  async mounted() {
    await this.index();
    await console.log(this.users);
  },
};
</script>
<style>
</style>