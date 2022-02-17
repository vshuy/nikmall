<template>
  <div class="container">
    <Header></Header>
    <h2 class="text-center">Pay items page</h2>
    <div class="row w-50 ml-5">
      <div
        v-for="(item, index) in carts"
        :key="index"
        class="col-sm-12 border-bottom bg-light"
        style="border-radius: 12px"
      >
        <div class="row">
          <div class="col-sm-3">
            <img
              v-bind:src="item.link_thumbnail"
              alt="n"
              width="100px"
              height="100px"
            />
          </div>

          <div class="col-sm-9" style="position: relative">
            <i
              class="fas fa-times"
              style="color: red; position: absolute; right: 20px; top: 2px"
              v-on:click="removeAnItem(item.id)"
            ></i>
            <div style="display: inline-block; font-weight: 900">
              {{ item.name }}
            </div>
            <p>{{ item.cost }}$</p>
            <p>{{ item.quantity }} items</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-4 text-center">
        <span calss="text-center" style="color: blue"
          >{{ carts.length }} Item, $ {{ total_state }}
        </span>
      </div>
      <div class="col-md-12">
        <span>Please select an address to deliver :</span>
        <select :value="bill.address_id" @input="setAddressId">
          <option
            v-for="(option, index) in addresses"
            v-bind:value="option.id"
            :key="index"
          >
            {{ option.name_address }}
          </option>
        </select>
      </div>
      <div class="col-md-12 text-center mt-3">
        <button type="button" class="btn btn-success mr-3" v-on:click="store()">
          payNow <i class="fab fa-cc-paypal"></i>
        </button>
      </div>
    </div>
    <Paypal class="mt-2"></Paypal>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
import Paypal from '../views/Paypal.vue';
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';
export default {
  name: 'Checkout',
  components: {
    Header,
    Footer,
    Paypal,
  },
  mounted() {
    this.index();
  },
  methods: {
    ...mapMutations('checkout', {
      removeAnItem: 'removeAnItem',
      setAddressId: 'setAddressId',
    }),
    ...mapActions('checkout', {
      store: 'store',
      index: 'index',
    }),
  },
  computed: {
    ...mapState('checkout', {
      carts: (state) => state.carts,
      addresses: (state) => state.addresses,
      bill: (state) => state.bill,
    }),
    ...mapGetters('checkout', {
      total_state: 'total_state',
    }),
  },
};
</script>
<style>
.condiv {
  width: 100px;
}
</style>