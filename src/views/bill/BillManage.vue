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
            <td>
              <select :value="item.paid_status">
                <option
                  v-for="(option, index) in bill_status"
                  v-bind:value="option.id"
                  :key="index"
                >
                  {{ option.status }}
                </option>
              </select>
            </td>
            <td>
              <u v-on:click="destroy(item.id)">Delete this bill</u>
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
  name: 'BillManage',
  metaInfo: {
    title: 'Bills overview',
    script: [],
  },
  methods: {
    ...mapActions('bill', {
      index: 'index',
      initStore: 'initStore',
      destroy: 'destroy',
    }),
  },
  computed: {
    ...mapState('bill', {
      bills: (state) => state.bills,
      bill_status: (state) => state.bill_status,
    }),
  },
  mounted() {
    this.index();
    this.initStore();
  },
};
</script>
<style>
/* @import './../assets/css/dashboard.css'; */
</style>
