<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <h2>Quản lý bills</h2>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Detail bill</th>
            <th>Edit this bill</th>
            <th>Pay status</th>
            <th>Delete bill</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in bills" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.user.name }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.total }}</td>
            <td>
              <router-link :to="{ name: 'bill-show', params: { id: item.id } }"
                >Chi tiết hóa đơn này
              </router-link>
            </td>
            <td>
              <router-link :to="{ name: 'bill-edit', params: { id: item.id } }"
                >Chỉnh sửa hóa đơn này
              </router-link>
            </td>
            <td>
             <th v-if="item.paid_status === 1" class="text-warning">
                {{ item.bill_status.status }}
              </th>
              <th v-else-if="item.paid_status === 2" class="text-info">
                {{ item.bill_status.status }}
              </th>
              <th v-else-if="item.paid_status === 3" class="text-primary">
                {{ item.bill_status.status }}
              </th>
              <th v-else-if="item.paid_status === 4" class="text-success">
                {{ item.bill_status.status }}
              </th>
              <th v-else-if="item.paid_status === 5" class="text-danger">
                {{ item.bill_status.status }}
              </th>
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
  name: 'BillIndex',
  metaInfo: {
    title: 'Bills overview',
    script: [],
  },
  methods: {
    ...mapActions('bill', {
      index: 'index',
      destroy: 'destroy',
    }),
  },
  computed: {
    ...mapState('bill', {
      bills: (state) => state.bills,
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
