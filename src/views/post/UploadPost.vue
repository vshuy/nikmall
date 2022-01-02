<template lang="">
  <div class="container">
    <input type="email" v-model="namepost" class="form-control"  placeholder="Enter post name here">
<select v-model="id_category">
  <option disabled value="">Please select one</option>
  <option v-for="(option, index) in listcategory" v-bind:value="option.id" :key="index">
    {{ option.name_category_post }}
  </option>
</select>
      <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
      <button  v-on:click="HandleUploadPost" class="w-20 btn btn-lg btn-primary">Upload post</button>
  </div>
</template>
<script>
// import router from '../router';
const axios = require('axios');

export default {
  data() {
    return {
      namepost: '',
      id_category: '',
      listcategory: [],
      editorData: '',
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  methods: {
    async uploadPost() {
      const result = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/uploadpost/',
        data: {
          postname: this.namepost,
          id_category: this.id_category,
          content: this.editorData,
        },
      });
      return result.data;
    },
    async getCategoryPost() {
      const result = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/getlistpostcategoty/',
      });
      return result.data;
    },
    async getData() {
      this.listcategory = await this.getCategoryPost();
      console.log('Info log: ~ listcategory', this.listcategory);
    },
    async HandleUploadPost() {
      let tmpvl = await this.uploadPost();
      console.log('Info log: ~ tmpvl', tmpvl);
      this.$router.push('listpost');
    },
  },
  mounted() {
    console.log('running in mounted method');
    // this.token = this.$cookies.get('token');
    // alert('runing in mounter');
    this.getData();
  },
};
</script>
<style lang="">
</style>
