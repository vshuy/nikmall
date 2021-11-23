<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <h2>Quản lý bills</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Detail bill</th>
            <th>Pay status</th>
            <th>Delete bill</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in bills" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.total }}</td>
            <td>
              <router-link :to="{ name: 'detailbill', params: { id: item.id } }"
                >Chi tiết hóa đơn này
              </router-link>
            </td>
            <td v-if="item.paid === 1">
              <input
                class="form-check-input"
                v-on:click="unCheckPay(item.id)"
                type="checkbox"
                value="1"
                id="flexCheckDefault"
                checked
              />
              <label class="form-check-label" for="flexCheckDefault"
                >đã thanh toán</label
              >
            </td>
            <td v-else>
              <input
                class="form-check-input"
                v-on:click="checkPay(item.id)"
                type="checkbox"
                value="0"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault"
                >đã thanh toán</label
              >
            </td>
            <td>
              <u v-on:click="deleteBillById(item.id)">Delete this bill</u>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
const axios = require('axios');
import { RESOURCE_BILL } from './../../api/api';

export default {
  name: 'BillManage',
  data() {
    return {
      bills: [],
    };
  },
  metaInfo: {
    title: 'Bills overview',
    script: [],
  },
  methods: {
    async getListBill() {
      const result = await axios.get(`${RESOURCE_BILL}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      return result.data;
    },
    async deleteBillById(id) {
      const result = await axios.delete(`${RESOURCE_BILL}/${id}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      this.bills = this.bills.filter((item) => item.id !== id);
      return result.data;
    },
    async checkPay(id_item) {
      const result = await axios.put(
        `${RESOURCE_BILL}/${id_item}`,
        {
          check_value: 1,
        },
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      return result.data;
    },
    async unCheckPay(id_item) {
      const result = await axios.put(
        `${RESOURCE_BILL}/${id_item}`,
        {
          check_value: 0,
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
      this.bills = await this.getListBill();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
/* @import './../assets/css/dashboard.css'; */
</style>
