<template>
  <div class="container">
    <div class="row"><Header></Header></div>
    <div class="container w-50">
      <h2>DETAIL THIS BILL</h2>
      <h3>Customer name: {{ bill.bill.user.name }}</h3>
      <h4>Email address: {{ bill.bill.user.email }}</h4>
      <h4>Phone: {{ bill.bill.user.phone_number }}</h4>
      <h4>Date order: {{ bill.bill.created_at }}</h4>
      <h5>
        Total cost $: {{ bill.bill.total }} ||
        {{ bill.detailBill.length }} items
      </h5>
      <h6>Status: {{ bill.bill.bill_status.status }}</h6>
      <h6>Address: {{ bill.bill.address.name_address }}</h6>
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
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Header from './../../components/Header.vue';
export default {
  name: 'BillShow',
  metaInfo: {
    title: 'Bills show',
    script: [],
  },
  methods: {
    ...mapActions('bill', {
      show: 'show',
    }),
  },
  computed: {
    ...mapState('bill', {
      bill: (state) => state.bill,
    }),
  },
  components: {
    Header,
  },
  mounted() {
    this.show(this.$route.params.id);
  },
};
</script>
<style>
</style>
