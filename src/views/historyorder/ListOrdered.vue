<template>
  <div class="container">
    <div class="row">
      <Header></Header>
      <div class="col-sm-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Time order</th>
              <th scope="col">Cost</th>
              <th scope="col">Pay status</th>
              <th scope="col">Detail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in bills" :key="index">
              <th scope="row">{{ item.id }}</th>
              <th>{{ item.created_at }}</th>
              <th>$ {{ item.total }}</th>
              <th v-if="item.paid === 2" class="text-success">Đã bi huy</th>
              <th v-else class="text-warning">Đang van chuyen</th>
              <th>
                <router-link
                  :to="{ name: 'detailbill', params: { id: item.id } }"
                  >Chi tiết hóa đơn này
                </router-link>
              </th>
              <th>
                <u v-on:click="deleteOrderById(item.id)">Cancel this bill</u>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require('axios');
import Header from '../../components/Header.vue';
import { RESOURCE_BILL, BASE_URL } from './../../api/api';

export default {
  name: 'ListOrderd',
  data() {
    return {
      bills: [],
    };
  },
  metaInfo: {
    title: 'Orders overview',
    script: [],
  },
  methods: {
    async getListOrder() {
      const result = await axios.post(
        `${BASE_URL}/api/getlistbillbyuserid`,
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
    async deleteOrderById(id) {
      const result = await axios.delete(`${RESOURCE_BILL}/${id}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      this.bills = this.bills.filter((item) => item.id !== id);
      return result.data;
    },
    async getData() {
      let resb = await this.getListOrder();
      console.log(resb);
      this.bills = resb;
    },
  },
  components: {
    Header,
  },
  setup() {
    console.log('runnning in setup method');
  },
  mounted() {
    console.log('running in mounted method');
    this.token = this.$cookies.get('token');
    this.getData();
  },
};
</script>
<style>
</style>
