<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">    
      <div class="container">
        <div class="row">
          <div class="col-md-4 bg-info" style="height: 100px;">
            <i class="fas fa-file-invoice" style="font-size: 50px;padding: 30px;"></i>
            <span>{{bill_statistic.new_bills}} New orders today</span>
          </div>
          <div class="col-md-4 bg-success" style="height: 100px;">
            <i class="fas fa-file-invoice-dollar" style="font-size: 50px;padding: 30px;"></i>
            <span>${{bill_statistic.purchases_today}} Total income today</span>
          </div>
          <div class="col-md-4 bg-warning" style="height: 100px;">
            <i class="fas fa-users" style="font-size: 50px;padding: 30px;"></i>
            <span>{{bill_statistic.new_customers}} New customers today</span>
          </div>
        </div>
      </div>
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
      getBillStatistic: 'getBillStatistic',
    }),
  },
  computed: {
    ...mapState('bill', {
      bills: (state) => state.bills,
      bill_statistic: (state) => state.bill_statistic,
    }),
  },
  mounted() {
    this.index();
    this.getBillStatistic();
  },
};
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
/* @import './../assets/css/dashboard.css'; */
</style>
