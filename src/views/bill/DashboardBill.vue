<template lang="">
  <div class="container-fluid">
          <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                  <router-link class="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/" style="color:green">NIK</router-link>
                  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
                  <ul class="navbar-nav px-3">
                      <li class="nav-item text-nowrap">
                      </li>
                  </ul>
          </header>
          <div class="container-fluid">
              <div class="row">
                  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                      <div class="position-sticky pt-3">
                          <ul class="nav flex-column">
                               <li class="nav-item">                                  
                                  <router-link class="nav-link active" to="/dashboardproduct">Dashboard product</router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link class="nav-link active" to="/dashboardbill">Dashboard bill</router-link>
                              </li>
                               <li class="nav-item">                                  
                                  <router-link class="nav-link active" to="/dashboardslide">Dashboard slide</router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link class="nav-link active" to="/dashboardcategory">Dashboard category</router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link class="nav-link active" to="/uploadslide">Upload slide</router-link>
                              </li>
                               <li class="nav-item">                                  
                                  <router-link class="nav-link active" to="/uploadproduct">Upload product</router-link>
                              </li>
                              <li class="nav-item">
                                  <router-link class="nav-link active" to="/uploadcategory">Upload category</router-link>
                              </li>
                          </ul>
                      </div>
                  </nav>
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
                                    <td><router-link :to="{ name: 'detailbill', params: { id: item.id } }">Chi tiết hóa đơn này </router-link></td>
                                    <td v-if="item.paid === 1">
                                      <input class="form-check-input" v-on:click="unCheckPay(item.id)" type="checkbox" value="1" id="flexCheckDefault" checked>
                                      <label class="form-check-label" for="flexCheckDefault">đã thanh toán</label>
                                    </td>
                                    <td v-else>
                                      <input class="form-check-input" v-on:click="checkPay(item.id)" type="checkbox" value="0" id="flexCheckDefault">
                                      <label class="form-check-label" for="flexCheckDefault">đã thanh toán</label>
                                    </td>
                                    <td><u v-on:click="deleteBillById(item.id)">Delete this bill</u></td>
                                </tr>
                              </tbody>
                          </table>
                      </div>
                  </main>
          </div>
      </div>
  </div>
</template>
<script>
const axios = require('axios');
import { RESOURCE_BILL } from './../../api/api';

export default {
  name: 'DashboardBill',
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
