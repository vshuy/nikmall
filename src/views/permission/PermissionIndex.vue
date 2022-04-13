<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Name:</strong>
          <input
            type="text"
            :value="permission.name"
            @input="setName"
            placeholder="Name"
            class="form-control"
          />
          <button v-on:click="store()" class="btn btn-primary mt-3">
            Create new
          </button>
        </div>
      </div>
      <div class="col-md-12">
        <h2>Manage permissions</h2>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in permissions" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <router-link
                  :to="{ name: 'permission-edit', params: { id: item.id } }"
                >
                  Edit this permission</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'PermissionIndex',
  metaInfo: {
    title: 'Permission overview',
    script: [],
  },
  methods: {
    ...mapMutations('permission', {
      setName: 'setName',
    }),
    ...mapActions('permission', {
      index: 'index',
      store: 'store',
    }),
  },
  computed: {
    ...mapState('permission', {
      permissions: (state) => state.permissions,
      permission: (state) => state.permission,
    }),
  },
  mounted() {
    this.index();
  },
};
</script>
<style>
</style>