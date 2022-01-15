<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div class="pull-left">
          <h2>Edit Role</h2>
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
          <input
            type="text"
            :value="role.name"
            @input="setNameRole"
            placeholder="Name"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Permission:</strong>
          <br />
          <div v-for="(item, index) in permissions" :key="index">
            <input
              type="checkbox"
              :value="item.id"
              :id="item.id"
              v-model="checkedIds"
            />
            <label :for="item.id">{{ item.name }}</label>
          </div>
          {{ checkedIds }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 text-center">
        <button v-on:click="update(checkedIds)" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'RoleEdit',
  data() {
    return {
      checkedIds: [],
    };
  },
  methods: {
    ...mapMutations('role', {
      setNameRole: 'setNameRole',
    }),
    ...mapActions('role', {
      edit: 'edit',
      update: 'update',
    }),
  },
  computed: {
    ...mapState('role', {
      role: (state) => state.role,
      permissions: (state) => state.permissions,
    }),
    ...mapGetters('role', {
      getRolePermission: 'getRolePermission',
    }),
  },
  async mounted() {
    await this.edit(this.$route.params.id);
    this.checkedIds = await this.getRolePermission;
  },
};
</script>
<style></style>
