<template lang="">
  <div class="container">
    <h1>Upload product page</h1>
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
      <button  v-on:click="HandleUploadProduct" class="w-20 btn btn-lg btn-primary">Upload product</button>
  </div>
</template>
<script>
import { RESOURCE_PRODUCT, RESOURCE_CATEGORY } from './../../api/api';
const axios = require('axios');
const FormData = require('form-data');

export default {
  name: 'UploadProduct',
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
    title: 'products upload page',
    script: [],
  },
  methods: {
    handleFileUpload() {
      this.file_img = this.$refs.file.files[0];
    },
    async uploadProduct() {
      const form = new FormData();
      form.append('nameProduct', this.nameproduct);
      form.append('id_category', this.id_category);
      form.append('cost', this.cost);
      form.append('file_img_product', this.file_img);
      form.append('post_data', this.editorData);
      const result = await axios.post(`${RESOURCE_PRODUCT}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: this.$cookies.get('token'),
        },
      });
      return result.data;
    },
    async getCategoryProduct() {
      const result = await axios.get(`${RESOURCE_CATEGORY}`);
      return result.data;
    },
    async getData() {
      this.listcategory = await this.getCategoryProduct();
      console.log('Info log: ~ listcategory', this.listcategory);
    },
    async HandleUploadProduct() {
      const tmpvl = await this.uploadProduct();
      console.log('Info log: ~ tmpvl', tmpvl);
      this.$router.push('dashboard');
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
