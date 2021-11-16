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
              v-bind:src="item.urlimg"
              alt="n"
              width="100px"
              height="100px"
            />
          </div>

          <div class="col-sm-9" style="position: relative">
            <i
              class="fas fa-times"
              style="color: red; position: absolute; right: 20px; top: 2px"
              v-on:click="deleteItemByItem(item)"
            ></i>
            <div style="display: inline-block; font-weight: 900">
              {{ item.name }}
            </div>
            <p>{{ item.cost }}$</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-4 text-center">
        <span calss="text-center" style="color: blue"
          >{{ carts.length }} Item, $ {{ sum }}
        </span>
      </div>
      <div class="col-md-6 text-center mt-3">
        <button
          type="button"
          class="btn btn-success mr-3"
          v-on:click="payNow()"
        >
          payNow <i class="fab fa-cc-paypal"></i>
        </button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
const axios = require('axios');
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { RESOURCE_BILL } from './../api/api';
export default {
  name: 'CartDetail',
  data() {
    return {
      carts: [],
      sum: 0.0,
    };
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.carts = JSON.parse(localStorage.getItem('carts'));
    this.callSum();
  },
  methods: {
    deleteItemByItem(item_in) {
      this.carts = this.carts.filter((item) => item !== item_in);
      this.callSum();
    },
    callSum() {
      this.sum = this.carts.reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0.0,
      );
    },
    async uploadCartBill() {
      const list_id_products = this.carts.map((item) => {
        const tmp = {
          bill_id: '',
          product_id: item.id,
          amounts: 1,
        };
        return tmp;
      });
      const result = await axios.post(
        `${RESOURCE_BILL}`,
        {
          user_id: this.$cookies.get('user_id'),
          total: this.sum,
          id_products: list_id_products,
        },
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      return result.data;
    },
    async payNow() {
      const result = await this.uploadCartBill();
      console.log('Info log bill: ~ result', result);
      this.$router.push('listorder');
    },
  },
};
</script>
<style>
.condiv {
  width: 100px;
}
</style>