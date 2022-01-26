<template>
  <div class="container">
    <div class="row">
      <Header></Header>
      <div class="col-sm-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Time order</th>
              <th scope="col">Cost</th>
              <th scope="col">Pay status</th>
              <th scope="col">Detail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in bills" :key="index">
              <th scope="row">{{ item.id }}</th>
              <th>{{ item.created_at }}</th>
              <th>$ {{ item.total }}</th>
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
              <th>
                <router-link
                  :to="{ name: 'detailbill', params: { id: item.id } }"
                  >Chi tiết hóa đơn này
                </router-link>
              </th>
              <th>
                <u v-on:click="destroy(item.id)">Cancel this bill</u>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ListOrder',
  metaInfo: {
    title: 'History order',
    script: [],
  },
  components: {
    Header,
  },
  methods: {
    ...mapActions('historyOrder', {
      index: 'index',
      destroy: 'destroy',
    }),
  },
  computed: {
    ...mapState('historyOrder', {
      bills: (state) => state.bills,
    }),
  },
  mounted() {
    this.index();
  },
};
</script>
<style>
</style>
