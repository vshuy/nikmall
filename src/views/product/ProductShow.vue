<template>
  <div class="container">
    <div class="row">
      <Header></Header>
      <div class="col-md-6">
        <div class="ml-5">
          <h1>{{ product.name }}</h1>
          <h2>Cost $ {{ product.cost }}</h2>
          <h6 class="mt-4">Brand {{ product.brand.name }}</h6>
          <h6 class="mt-4">Storage {{ product.memory.size }}</h6>
          <h6 class="mt-4">Ram {{ product.ram.size }}</h6>
          <h6 class="mt-4">Display {{ product.display.size }}</h6>
          <h6 class="mt-4">Battery {{ product.battery.size }}</h6>
          <h6 class="mt-4">Operating system {{ product.opera.name }}</h6>
          <div>
            <button type="button" class="btn btn-primary mr-3 mt-5">
              Buy it now <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img v-bind:src="product.link_thumbnail" alt="not found" />
      </div>
      <div class="col-md-12"><div v-html="product.content_post"></div></div>
      <Comment v-bind:product_id_pr="product.id"></Comment>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header.vue';
import Comment from '../../components/Comment.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ProductShow',
  components: {
    Header,
    Comment,
  },
  metaInfo: {
    title: 'Detail product page',
  },
  methods: {
    ...mapActions('product', {
      show: 'show',
    }),
  },
  computed: {
    ...mapState('product', {
      product: (state) => state.product,
    }),
  },
  mounted() {
    this.show(this.$route.params.id);
  },
};
</script>
<style>
</style>
