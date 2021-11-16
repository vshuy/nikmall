<template>
  <div class="container w-50">
    <h2>DETAIL THIS BILL</h2>
    <!-- <h3>Customer name: {{ bill_data.userInfor[0].name }}</h3>
    <h4>Email address: {{ bill_data.userInfor[0].email }}</h4>
    <h5>Total cost $: {{ total }} {{ countItem }} items</h5> -->
    <div class="row">
      <div
        v-for="(item, index) in bill_data.listBill"
        :key="index"
        class="col-sm-12 border-bottom mt-1"
      >
        <div class="row">
          <div class="col-sm-3">
            <img v-bind:src="item.urlimg" alt="n" width="80px" height="80px" />
          </div>
          <div class="col-sm-9">
            <div style="display: inline-block; font-weight: 900">
              {{ item.name }}
            </div>
            <p>$ {{ item.cost }}</p>
            <p>{{ item.amounts }} items</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { RESOURCE_BILL } from './../../api/api';

export default {
  name: 'DetailBill',
  data() {
    return {
      bill_data: null,
      sum: 0.0,
    };
  },
  metaInfo: {
    title: 'Detail bill page',
  },
  methods: {
    async getDetailBill() {
      const result = await axios.get(
        `${RESOURCE_BILL}/${this.$route.params.id}`,
        {
          user_id: this.$cookies.get('user_id'),
        },
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      return result.data;
    },
    async getData() {
      this.bill_data = await this.getDetailBill();
      console.log('Info log: ~ billdata', this.bill_data);
      this.callSum;
    },
    callSum() {
      this.sum = this.bill_data.listBill.reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0.0,
      );
    },
  },
  computed: {
    total() {
      return this.bill_data.listBill.reduce(
        (previousValue, currentValue) => previousValue + currentValue.cost,
        0.0,
      );
    },
    countItem() {
      return this.bill_data.listBill.length;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
</style>
