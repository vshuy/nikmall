<template>
  <div class="container">
    <!-- <div class="testtext"> test what is going on</div> -->
    <div class="row">
      <Header></Header>
      <Slide></Slide>
      <div
        v-for="(item, index) in products.data"
        :key="index"
        class="col-sm-3 mt-3"
      >
        <router-link :to="{ name: 'detailproduct', params: { id: item.id } }">
          <img
            style="border-radius: 12px"
            v-bind:src="item.urlimg"
            alt="n"
            width="100%"
            height="250px"
          />
        </router-link>
        <div class="item-product ml-3 mt-2">{{ item.name }}</div>
        <div class="container">
          <div>
            <div class="mt-2">
              <span>Price $ {{ item.cost }}</span>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-primary mr-3"
                v-on:click="addAnItemToCart(item)"
              >
                Add to cart <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto">
      <Pagination
        :data="products"
        @pagination-change-page="getData"
        align="center"
      >
        <span slot="prev-nav">&lt; Previous</span>
        <span slot="next-nav">Next &gt;</span>
      </Pagination>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Slide from '../components/Slide.vue';
import { RESOURCE_PRODUCT } from './../api/api.js';
const Pagination = require('laravel-vue-pagination');
const axios = require('axios');

export default {
  name: 'Home',
  props: {
    title: String,
  },
  data() {
    return {
      products: {},
    };
  },
  methods: {
    async getListImg(page) {
      const result = await axios.get(`${RESOURCE_PRODUCT}/pg?page=${page}`, {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      });
      return result.data;
    },
    async getData(page) {
      if (typeof page === 'undefined') {
        page = 1;
      }
      this.products = await this.getListImg(page);
      console.log('Info log: ~ this.products', this.products);
    },
    addAnItemToCart(item) {
      if (this.$store.state.carts.includes(item) === false) {
        this.$store.commit('addToCart', item);
      }
    },
  },
  setup() {
    console.log('runnning in setup method');
  },
  mounted() {
    console.log('running in mounted method');
    this.getData();
  },
  components: {
    Header,
    Slide,
    Footer,
    Pagination,
  },
  computed: mapState(['count']),
};
</script>
<style>
.item-product {
  font-weight: 900;
  font-size: 20px;
}
</style>
