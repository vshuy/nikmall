<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div class="pull-left">
          <h2>Show Role</h2>
        </div>
        <div class="pull-right">
          <router-link class="btn btn-primary" to="/role-index"
            >Back</router-link
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Name:</strong>
          {{ role.name }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Permissions:</strong>
          <label class="label label-success mr-1" v-for="(item, index) in role.permissions" :key="index">
            {{ item.name }},
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'RoleShow',
  methods: {
    ...mapActions('role', {
      show: 'show',
    }),
  },
  computed: {
    ...mapState('role', {
      role: (state) => state.role,
    }),
  },
  mounted() {
    this.show(this.$route.params.id);
  },
};
</script>
<style>
</style>