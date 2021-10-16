<template>
  <div>
    <span>Hello paypall</span>
    <div id="idpay"></div>
  </div>
</template>
<script>
import { loadScript } from '@paypal/paypal-js';
loadScript({
  'client-id':
    'ARu5sadBS-usEEW9An48j9qavPC9ayFyt40zmsShm-CsNnKxI3wrffO17OPRfPl_8z5DgjCx-pwNYAuF',
  currency: 'USD',
});
export default {
  name: 'paypal',
  data() {
    return {
      email: 'vshbmt@gmail.com',
    };
  },
  metaInfo: {
    title: 'pay page',
  },
  methods: {},
  mounted() {
    async function testPaypal() {
      let paypal;

      try {
        paypal = await loadScript({ 'client-id': 'test' });
      } catch (error) {
        console.error('failed to load the PayPal JS SDK script', error);
      }

      if (paypal) {
        try {
          await paypal.Buttons().render('#idpay');
        } catch (error) {
          console.error('failed to render the PayPal Buttons', error);
        }
      }
    }
    testPaypal();
  },
};
</script>
<style>
</style>