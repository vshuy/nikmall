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
                          <h2>Quản lý product</h2>
                          <table class="table table-striped table-sm">
                              <thead>
                                  <tr>
                                      <th>Id</th>
                                      <th>Name</th>
                                      <th>Cost</th>
                                      <th>Update</th>
                                      <th>Xóa product</th>
                                  </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(item, index) in products" :key="index">
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.cost }}</td>
                                    <td> <router-link :to="{ name: 'updateproduct', params: { id: item.id } }"> Edit this product</router-link></td>
                                    <td><u v-on:click="deleteProductById(item.id)">Xóa danh mục này</u></td>
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
import { RESOURCE_PRODUCT } from './../../api/api';

export default {
  name: 'DashboardProduct',
  props: {
    title: String,
  },
  data() {
    return {
      products: [],
    };
  },
  metaInfo: {
    title: 'products overview',
    script: [],
  },
  methods: {
    async getListImg() {
      const result = await axios.get(`${RESOURCE_PRODUCT}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      return result.data;
    },
    async deleteProductById(id) {
      console.log('Info log: ~ id', id);
      const result = await axios.delete(`${RESOURCE_PRODUCT}/${id}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      this.products = this.products.filter((item) => item.id !== id);
      return result.data;
    },
    async getData() {
      this.products = await this.getListImg();
    },
  },
  setup() {
    console.log('runnning in setup method');
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
/* @import './../assets/css/dashboard.css'; */
</style>
