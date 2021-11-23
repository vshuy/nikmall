<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <h2>Quản lý category</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Descripe</th>
            <th>Edit</th>
            <th>Xóa danh mục</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in categories" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.type_product }}</td>
            <td>{{ item.descripe }}</td>
            <td>
              <router-link
                :to="{ name: 'updatecategory', params: { id: item.id } }"
              >
                Edit this category</router-link
              >
            </td>
            <td>
              <u v-on:click="deleteCategoryById(item.id)">Xóa danh mục này</u>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
const axios = require('axios');
import { RESOURCE_CATEGORY } from '../../api/api';
export default {
  name: 'CategoryManage',
  data() {
    return {
      categories: [],
    };
  },
  metaInfo: {
    title: 'Categories overview',
    script: [],
  },
  methods: {
    async getListImg() {
      const result = await axios.get(`${RESOURCE_CATEGORY}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      return result.data;
    },
    async deleteCategoryById(id) {
      const result = await axios.delete(`${RESOURCE_CATEGORY}/${id}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      this.categories = this.categories.filter((item) => item.id !== id);
      return result.data;
    },
    async getData() {
      this.categories = await this.getListImg();
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
