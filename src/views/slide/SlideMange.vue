<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <h2>Quản lý slide</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Xóa danh mục</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in slides" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
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
  name: 'SlideManage',
  metaInfo: {
    title: 'Slide overview',
    script: [],
  },
  methods: {
    ...mapActions('slide', {
      index: 'index',
      destroy: 'destroy',
    }),
  },
  computed: {
    ...mapState('slide', {
      slides: (state) => state.slides,
    }),
  },
  mounted() {
    this.index();
  },
};
</script>
<style>
</style>
