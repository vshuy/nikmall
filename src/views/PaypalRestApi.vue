<template>
  <div>Hello this is paypal api page</div>
</template>
<script>
const axios = require('axios');
export default {
  methods: {
    async getToken() {
      const auth = await axios({
        url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Accept-Language': 'en_US',
          'content-type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: process.env.PAYPAL_CLIENT_ID,
          password: process.env.PAYPAL_CLIENT_SECRET_ID,
        },
        params: {
          grant_type: 'client_credentials',
        },
      });
      console.log(auth.data);
    },
  },
};
</script>
<style lang="">
</style>