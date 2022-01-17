<template>
  <div class="container">
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
          <a class="btn btn-primary" to="/role-index"> Back</a>
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
        <button v-on:click="store(checkedIds)" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'RoleCreate',
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
      create: 'create',
      store: 'store',
    }),
  },
  computed: {
    ...mapState('role', {
      role: (state) => state.role,
      permissions: (state) => state.permissions,
    }),
  },
  mounted() {
    this.create();
  },
};
</script>
<style></style>
