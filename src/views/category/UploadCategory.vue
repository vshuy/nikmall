<template>
  <div class="container">
    <h1>Upload category page</h1>
    <input type="text" v-model="name_category" class="form-control form"  placeholder="Enter category name here">
    <input type="text" v-model="describe" class="form-control form"  placeholder="Enter desctibe here">
      <button  v-on:click="HandleUploadCategory" class="w-20 btn btn-lg btn-primary">Upload Category</button>
  </div>
</template>
<script>
const axios = require('axios');
import { RESOURCE_CATEGORY } from './../../api/api';

export default {
  name: 'UploadCategory',
  data() {
    return {
      name_category: '',
      describe: '',
      token: '',
    };
  },
  methods: {
    async uploadCategory() {
      const result = await axios.post(
        `${RESOURCE_CATEGORY}`,
        {
          name_category: this.name_category,
          describe: this.describe,
        },
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      return result.data;
    },
    async HandleUploadCategory() {
      const tmpvl = await this.uploadCategory();
      console.log('Info log: ~ tmpvl', tmpvl);
      this.$router.push('dashboard');
    },
  },
  mounted() {
    console.log('running in mounted method');
    this.token = this.$cookies.get('token');
    // alert('runing in mounter');
  },
};
</script>
<style scoped>
.form {
  width: 600px;
}
</style>
