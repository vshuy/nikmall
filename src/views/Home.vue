<template>
  <div class="container">
    <div class="row">
      <Header></Header>
      <Slide></Slide>
      <div class="col-md-12" style="position: relative">
        <HomeFilter></HomeFilter>

        <div class="left-banner">
          <img
            class="mb-4"
            src="../assets/left-banner.jpg"
            alt=""
            height="auto"
            width="180px"
          />
        </div>
        <div class="right-banner">
          <img
            class="mb-4"
            src="../assets/right-banner.jpg"
            alt=""
            height="auto"
            width="180"
          />
        </div>
      </div>
      <div
        v-for="(item, index) in products.data"
        :key="index"
        class="col-sm-3 mt-2"
        style="position: relative"
      >
        <div
          class="bg-info rounded-pill"
          style="position: absolute; right: 1px; padding: 8px"
          v-if="item.old_cost !== item.cost"
        >
          -{{ parseInt(((item.old_cost - item.cost) * 100) / item.old_cost) }}%
        </div>
        <router-link :to="{ name: 'detailproduct', params: { id: item.id } }">
          <img
            style="border-radius: 12px"
            v-bind:src="item.link_thumbnail"
            alt="n"
            width="100%"
            height="250px"
          />
        </router-link>
        <div class="item-product ml-3 mt-2">{{ item.name }}</div>
        <div class="container">
          <div>
            <div>
              <span v-if="item.old_cost !== item.cost" style="font-size: 10px">
                ${{ item.old_cost }}
              </span>
              <span class="ml-1">${{ item.cost }}</span>
            </div>
            <div>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-primary mr-3"
                v-on:click="addToCart(item)"
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
        @pagination-change-page="indexPage"
        align="center"
        class="mt-3"
      >
        <span slot="prev-nav">&lt; Previous</span>
        <span slot="next-nav">Next &gt;</span>
      </Pagination>
    </div>
    <Contact class="mt-3"></Contact>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Contact from '../components/Contact.vue';
import Slide from '../components/Slide.vue';
import HomeFilter from '../components/HomeFilter.vue';
const Pagination = require('laravel-vue-pagination');

export default {
  name: 'Home',
  methods: {
    ...mapMutations('cart', {
      addToCart: 'addToCart',
    }),
    ...mapActions('product', {
      indexPage: 'indexPage',
    }),
  },
  computed: {
    ...mapState('product', {
      products: (state) => state.products,
    }),
  },
  watch: {
    calDiscount(cost, old_cost) {
      return ((old_cost - cost) * 100) / old_cost;
    },
  },
  mounted() {
    this.indexPage();
  },
  components: {
    Header,
    Slide,
    Footer,
    HomeFilter,
    Contact,
    Pagination,
  },
};
</script>
<style>
.item-product {
  font-weight: 900;
  font-size: 20px;
}

.left-banner {
  position: absolute;
  left: -190px;
  top: -430px;
}

.right-banner {
  position: absolute;
  right: -190px;
  top: -430px;
}

.checked {
  color: orange;
}
</style>
