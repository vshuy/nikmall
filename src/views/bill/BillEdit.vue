<template>
  <div class="container w-50">
    <h2>UPDATE STATUS THIS BILL</h2>
    <h3>Customer name: {{ bill.bill.user.name }}</h3>
    <h4>Email address: {{ bill.bill.user.email }}</h4>
    <h5>
      Total cost $: {{ bill.bill.total }} || {{ bill.detailBill.length }} items
    </h5>
    <span>Update this order</span>
    <select :value="bill.bill.paid_status" @input="setBillStatusForAnBill">
      <option
        v-for="(option, index) in bill_status"
        v-bind:value="option.id"
        :key="index"
      >
        {{ option.status }}
      </option>
    </select>
    <div class="row">
      <div
        v-for="(item, index) in bill.detailBill"
        :key="index"
        class="col-sm-12 border-bottom mt-1"
      >
        <div class="row">
          <div class="col-sm-3">
            <img
              v-bind:src="item.product.link_thumbnail"
              alt="n"
              width="80px"
              height="80px"
            />
          </div>
          <div class="col-sm-9">
            <div style="display: inline-block; font-weight: 900">
              {{ item.product.name }}
            </div>
            <p>$ {{ item.product.cost }}</p>
            <p>{{ item.amounts }} items</p>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-success mx-auto mt-2" v-on:click="update()">
      UPDATE STATUS
    </button>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'BillEdit',
  metaInfo: {
    title: 'Bills edit',
    script: [],
  },
  methods: {
    ...mapActions('bill', {
      show: 'show',
      initStore: 'initStore',
      update: 'update',
    }),
     ...mapMutations('bill', {
      setBillStatusForAnBill: 'setBillStatusForAnBill',
    }),
  },
  computed: {
    ...mapState('bill', {
      bill: (state) => state.bill,
      bill_status: (state) => state.bill_status,
    }),
  },
  mounted() {
    this.show(this.$route.params.id);
    this.initStore();
  },
};
</script>
<style>
</style>
