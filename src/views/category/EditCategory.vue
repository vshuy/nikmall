<template lang="">
  <div class="container">
    <h1>Edit category page</h1>
    <input type="text" v-model="name_category" class="form-control form"  placeholder="Enter category name here">
    <input type="text" v-model="describe" class="form-control form"  placeholder="Enter desctibe here">
      <button  v-on:click="HandleUploadCategory" class="w-20 btn btn-lg btn-primary">Update Category</button>
  </div>
</template>
<script>
const axios = require('axios');
import { RESOURCE_CATEGORY } from './../../api/api';

export default {
  name: 'EditCategory',
  data() {
    return {
      id: '',
      name_category: '',
      describe: '',
    };
  },
  methods: {
    async getDetailCategory() {
      const result = await axios.get(
        `${RESOURCE_CATEGORY}/${this.$route.params.id}`,
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      return result.data;
    },
    async updateCategory() {
      const result = await axios.put(
        `${RESOURCE_CATEGORY}/${this.$route.params.id}`,
        {
          id_category: this.$route.params.id,
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
      const tmpvl = await this.updateCategory();
      console.log('Info log: ~ tmpvl', tmpvl);
      this.$router.push('dashboardcategory');
    },
    async getData() {
      // eslint-disable-next-line prefer-const
      const data_category = await this.getDetailCategory();
      console.log('Info log: ~ data_category', data_category);
      this.id = data_category[0].id;
      this.name_category = data_category[0].type_product;
      this.describe = data_category[0].descripe;
    },
  },
  mounted() {
    console.log('running in mounted method');
    this.getData();
  },
};
</script>
<style scoped>
.form {
  width: 600px;
}
</style>
