<template lang="">
  <div>
      <h4>{{datapost[0].name_post}}</h4>
        <span style="font-style: italic;color :black;">{{datapost[0].views}} views</span>
        <span style="color :red;"> {{datapost[0].created_at}}</span>
      <div v-html="datapost[0].contents_post"></div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'PostDetail',
  data() {
    return {
      datapost: '',
      listcomment: [],
    };
  },
  methods: {
    async getDetailPost() {
      const result = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/detailpost/' + this.$route.params.id,
      });
      return result.data;
    },
    async getData() {
      let resb = await this.getDetailPost();
      console.log(resb);
      this.listcomment = resb.listcomment;
      this.datapost = resb.detail;
    },
  },
  mounted() {
    console.log('running in mounted method');
    this.token = this.$cookies.get('token');
    // alert('runing in mounter');
    this.getData();
  },
};
</script>
<style>
</style>
