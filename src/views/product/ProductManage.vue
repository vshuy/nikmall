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
              <u v-on:click="destroy(item.id)">Xóa danh mục này</u>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProductManage',
  metaInfo: {
    title: 'products overview',
    script: [],
  },
  computed: {
    ...mapState('product', {
      products: state => state.products,
    }),
  },
  methods: {
    ...mapActions('product', {
      index: 'index',
      destroy: 'destroy',
    }),
  },
  mounted() {
    this.index();
  },
};
</script>
<style>
/* @import './../assets/css/dashboard.css'; */
</style>
