<template>
  <div class="container">
    <div class="row">
      <Header></Header>
      <div class="col-md-12">
        <h1>{{ dataproduct[0].name }}</h1>
        <h6>$ {{ dataproduct[0].cost }}</h6>
        <div>
          <button type="button" class="btn btn-primary mr-3">
            Buy it now <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
        <img v-bind:src="dataproduct[0].urlimg" alt="n" />
        <div v-html="dataproduct[0].contents_post"></div>
      </div>
      <Comment
        v-bind:product_id_pr="dataproduct[0].id"
        v-bind:comments_pr="comments"
      ></Comment>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Header from '../../components/Header.vue';
import Comment from '../../components/Comment.vue';
import { RESOURCE_PRODUCT } from './../../api/api';

export default {
  name: 'ProductDetail',
  data() {
    return {
      dataproduct: [],
      comments: [],
      comment_data: '',
    };
  },
  components: {
    Header,
    Comment,
  },
  metaInfo: {
    title: 'Detail product page',
  },
  methods: {
    async getDetailProduct() {
      const result = await axios.get(`${RESOURCE_PRODUCT}/${this.$route.params.id}`);
      return result.data;
    },
    async getData() {
      const resb = await this.getDetailProduct();
      this.dataproduct = resb.product;
      this.comments = resb.list_comment;
    },
  },
  mounted() {
    console.log('running in mounted method');
    this.getData();
  },
};
</script>
<style>
</style>
