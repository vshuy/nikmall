<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <h2>Product Manage</h2>
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
            <td>
              <router-link
                :to="{ name: 'updateproduct', params: { id: item.id } }"
              >
                Edit this product</router-link
              >
            </td>
            <td>
              <u v-on:click="deleteProductById(item.id)">Xóa danh mục này</u>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
const axios = require('axios');
import { RESOURCE_PRODUCT } from './../../api/api';

export default {
  name: 'ProductManage',
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
