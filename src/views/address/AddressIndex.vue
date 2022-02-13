<template>
  <div class="container">
    <div class="row">
      <Header></Header>
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
          <strong>Name address:</strong>
          <input
            type="text"
            :value="address.name_address"
            @input="setAddressName"
            placeholder="Enter your new address here"
            class="form-control"
          />
          <button v-on:click="store()" class="btn btn-primary mt-3">
            Create new address
          </button>
        </div>
      </div>
      <div class="col-md-12">
        <h2>Manage addresses</h2>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in addresses" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name_address }}</td>
              <td>
                <router-link
                  :to="{ name: 'address-edit', params: { id: item.id } }"
                >
                  Edit this address</router-link
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
import Header from '../../components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'AddressIndex',
  metaInfo: {
    title: 'Address overview',
    script: [],
  },
  methods: {
    ...mapMutations('address', {
      setAddressName: 'setAddressName',
    }),
    ...mapActions('address', {
      index: 'index',
      store: 'store',
    }),
  },
  computed: {
    ...mapState('address', {
      addresses: (state) => state.addresses,
      address: (state) => state.address,
    }),
  },
   components: {
    Header,
  },
  mounted() {
    this.index();
  },
};
</script>
<style>
</style>