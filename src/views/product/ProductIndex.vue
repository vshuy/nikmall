<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <h2>Product Manage</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Old cost</th>
            <th>Update</th>
            <th>Xóa product</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products.data" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>
              <img
                v-bind:src="item.link_thumbnail"
                alt="not found"
                height="50px"
                width="auto"
              />
            </td>
            <td>{{ item.quantity }} Units</td>
            <td>${{ item.cost }}</td>
            <td>${{ item.old_cost }}</td>
            <td>
              <router-link
                :to="{ name: 'product-edit', params: { id: item.id } }"
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
      <div class="mx-auto">
        <Pagination
          :data="products"
          @pagination-change-page="index"
          align="center"
          class="mt-3"
        >
          <span slot="prev-nav">&lt; Previous</span>
          <span slot="next-nav">Next &gt;</span>
        </Pagination>
      </div>
    </div>
  </main>
</template>
<script>
import { mapState, mapActions } from 'vuex';
const Pagination = require('laravel-vue-pagination');
export default {
  name: 'ProductIndex',
  metaInfo: {
    title: 'products overview',
    script: [],
  },
  computed: {
    ...mapState('product', {
      products: (state) => state.products,
    }),
  },
  methods: {
    ...mapActions('product', {
      index: 'index',
      destroy: 'destroy',
    }),
  },
  components: {
    Pagination,
  },
  mounted() {
    this.index();
  },
};
</script>
<style>
/* @import './../assets/css/dashboard.css'; */
</style>
