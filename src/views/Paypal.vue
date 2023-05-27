<template>
  <div>
    <div ref="paypal"></div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  name: 'Paypal',
  data() {
    return {
      amount: 10,
    };
  },
  metaInfo: {
    title: 'Checkout page',
  },
  computed: {
    ...mapState('checkout', {
      total: (state) => state.bill.total,
    }),
  },
  methods: {
    ...mapMutations('checkout', {
      setBillStatus: 'setBillStatus',
    }),
    ...mapActions('checkout', {
      store: 'store',
    }),
    saveBillToServe() {
      this.setBillStatus(2);
      this.store();
    },
    setLoaded() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: 'Paypal checkout',
                  amount: {
                    currency_code: 'USD',
                    value: this.total,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            this.saveBillToServe();
            // const order = await actions.order.capture();
            console.log("data response is not capture :", data);
            this.data;
            this.paidFor = true;
            //console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },
  mounted() {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=ARu5sadBS-usEEW9An48j9qavPC9ayFyt40zmsShm-CsNnKxI3wrffO17OPRfPl_8z5DgjCx-pwNYAuF`;
    script.addEventListener('load', this.setLoaded);
    document.body.appendChild(script);
  },
};
</script>
<style>
</style>
