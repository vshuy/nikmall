<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div class="pull-left">
          <h1>Assign role for user</h1>
          <h2>Name: {{ user.id }}</h2>
          <h2>Name: {{ user.name }}</h2>
          <h2>Email: {{ user.email }}</h2>
        </div>
        <div class="pull-right">
          <router-link class="btn btn-primary" to="/assign-role-index"
            >Back</router-link
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Role:</strong>
          <br />
          <select v-model="user.role_name" multiple>
            <option v-for="(item, index) in roles" :key="index">
              {{ item.name }}
            </option>
          </select>
          <br />
          <span>Selected: {{ user.role_name }}</span>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 text-center">
        <button v-on:click="update()" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'AssignEdit',
  methods: {
    ...mapMutations('assign_role', {
      setRoleName: 'setRoleName',
    }),
    ...mapActions('assign_role', {
      edit: 'edit',
      update: 'update',
    }),
  },
  computed: {
    ...mapState('assign_role', {
      roles: (state) => state.roles,
      user: (state) => state.user,
    }),
  },
  async mounted() {
    await this.edit(this.$route.params.id);
  },
};
</script>
<style></style>
