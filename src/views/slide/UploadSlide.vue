<template lang="">
  <div class="container">
    <h1>Upload slide page</h1>
    <input type="text" v-model="nameslide" class="form-control form"  placeholder="Enter slide name here">
    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
     <pre></pre>
      <button  v-on:click="HandleUploadSlide" class="w-20 btn btn-lg btn-primary">Upload slide</button>
  </div>
</template>
<script>
import { RESOURCE_SLIDE } from './../../api/api';
const axios = require('axios');
const FormData = require('form-data');

export default {
  name: 'UploadSlide',
  data() {
    return {
      nameslide: '',
      file_img: '',
    };
  },
  methods: {
    handleFileUpload() {
      // eslint-disable-next-line prefer-destructuring
      this.file_img = this.$refs.file.files[0];
    },
    async uploadProduct() {
      const form = new FormData();
      form.append('nameSlide', this.nameslide);
      form.append('fileSlide', this.file_img);
      const result = await axios.post(`${RESOURCE_SLIDE}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: this.$cookies.get('token'),
        },
      });
      return result.data;
    },
    async HandleUploadSlide() {
      const tmpvl = await this.uploadProduct();
      console.log('Info log: ~ tmpvl', tmpvl);
      this.$router.push('dashboardslide');
    },
  },
  mounted() {
    console.log('running in mounted method');
  },
};
</script>
<style>
</style>
