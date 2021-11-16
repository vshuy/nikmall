<template lang="">
  <div class="container">
    <h1>Update product page</h1>
    <input type="text" v-model="nameproduct" class="form-control name-form"  placeholder="Enter product name here">
    <input type="number" v-model="cost" class="form-control cost-form"  placeholder="Enter cost product">
    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
    <select v-model="id_category">
     <option disabled value="">Please select one</option>
     <option v-for="(option, index) in listcategory" v-bind:value="option.id" :key="index">
     {{ option.type_product }}
     </option>
    </select>
     <pre></pre>
     <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
      <button  v-on:click="HandleUpdateProduct" class="w-20 btn btn-lg btn-primary">Update product</button>
  </div>
</template>
<script>
import { RESOURCE_PRODUCT, RESOURCE_CATEGORY } from './../../api/api';
const axios = require('axios');

export default {
  name: 'UpdateProduct',
  data() {
    return {
      nameproduct: '',
      cost: '',
      id_category: '',
      listcategory: [],
      file_img: '',
      editorData: '',
      editorConfig: {
        // The configuration of the editor.
        height: 600,
      },
    };
  },
  metaInfo: {
    title: 'products edit',
    script: [],
  },
  methods: {
    handleFileUpload() {
      this.file_img = this.$refs.file.files[0];
    },
    async getDetailProduct() {
      const result = await axios.get(
        `${RESOURCE_PRODUCT}/${this.$route.params.id}`,
      );
      return result.data;
    },
    async updateProduct() {
      const result = await axios.put(
        `${RESOURCE_PRODUCT}/${this.$route.params.id}`,
        {
          id_product: this.$route.params.id,
          nameProduct: this.nameproduct,
          id_category: this.id_category,
          cost: this.cost,
          post_data: this.editorData,
        },
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      return result.data;
    },
    async getCategoryProduct() {
      const result = await axios.get(`${RESOURCE_CATEGORY}`);
      return result.data;
    },
    async getData() {
      const resb = await this.getDetailProduct();
      this.nameproduct = resb.product[0].name;
      this.cost = resb.product[0].cost;
      this.editorData = resb.product[0].contents_post;
      this.id_category = resb.product[0].category_id;
      this.listcategory = await this.getCategoryProduct();
      console.log('Info log: ~ listcategory', this.listcategory);
    },
    async HandleUpdateProduct() {
      const tmpvl = await this.updateProduct();
      console.log('Info log: ~ tmpvl', tmpvl);
      this.$router.push('dashboardproduct');
    },
  },
  mounted() {
    console.log('running in mounted method');
    this.getData();
  },
};
</script>
<style>
.name-form {
  width: 600px;
}
.cost-form {
  width: 300px;
}
</style>
