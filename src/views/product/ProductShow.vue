<template>
  <div class="container">
    <div class="row">
      <Header></Header>
      <div class="col-md-6">
        <h1>{{ product.name }}</h1>
        <h6>Cost {{ product.cost }}</h6>
        <h6>Brand {{ product.brand.name }}</h6>
        <h6>Storage {{ product.memory.size }}</h6>
        <h6>Ram {{ product.ram.size }}</h6>
        <h6>Display {{ product.display.size }}</h6>
        <h6>Battery {{ product.battery.size }}</h6>
        <h6>Operating system {{ product.opera.name }}</h6>
        <div>
          <button type="button" class="btn btn-primary mr-3">
            Buy it now <i class="fas fa-shopping-cart"></i>
          </button>
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
