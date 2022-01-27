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
            <td>{{ item.name }}</td>
            <td>{{ item.describe }}</td>
            <td>
              <router-link
                :to="{ name: 'update_post_category', params: { id: item.id } }"
              >
                Edit this category</router-link
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
import { mapActions, mapState } from 'vuex';
export default {
  name: 'PostCategoryIndex',
  metaInfo: {
    title: 'Categories overview',
    script: [],
  },
  methods: {
    ...mapActions('postCategory', {
      index: 'index',
      destroy: 'destroy',
    }),
  },
  computed: {
    ...mapState('postCategory', {
      categories: (state) => state.categories,
    }),
  },
  mounted() {
    this.index();
  },
};
</script>
<style>
</style>
