<template>
  <div class="container">
    <Header></Header>
    <h1>Edit address page</h1>
    <input
      type="text"
      :value="address.name_address"
      @input="setAddressName"
      class="form-control form"
      placeholder="Enter address name here"
    />
    <button v-on:click="update()" class="w-20 btn btn-lg btn-primary">
      Update address
    </button>
  </div>
</template>
<script>
import Header from '../../components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'AddressCreate',
   components: {
    Header,
  },
  methods: {
    ...mapMutations('address', {
      setAddressName: 'setAddressName',
    }),
    ...mapActions('address', {
      show: 'show',
      update: 'update',
    }),
  },
  computed: {
    ...mapState('address', {
      address: (state) => state.address,
    }),
  },
  mounted() {
    this.show(this.$route.params.id);
  },
};
</script>
<style scoped>
.form {
  width: 600px;
}
</style>
