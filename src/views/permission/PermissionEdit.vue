<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div class="pull-left">
          <h2>Edit Permission</h2>
        </div>
        <div class="pull-right">
          <router-link class="btn btn-primary" to="/permission-index"
            >Back</router-link
          >
        </div>
      </div>
    </div>
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
          <button v-on:click="update()" class="btn btn-primary">
            update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'PermissionEdit',
  metaInfo: {
    title: 'Permission edit',
    script: [],
  },
  methods: {
    ...mapMutations('permission', {
      setName: 'setName',
    }),
    ...mapActions('permission', {
      update: 'update',
      show: 'show',
    }),
  },
  computed: {
    ...mapState('permission', {
      permission: (state) => state.permission,
    }),
  },
  mounted() {
    this.show(this.$route.params.id);
  },
};
</script>
<style>
</style>