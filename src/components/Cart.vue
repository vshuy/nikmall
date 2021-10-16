<template>
  <div
    style="position: relative"
    @mouseover="$store.commit('setStatus', true)"
    @mouseleave="$store.commit('setStatus', false)"
  >
    <div
      class="bg-light pb-4"
      style="
        position: absolute;
        z-index: 999999;
        right: 0px;
        top: -25px;
        padding: 0px;
        border-radius: 12px;
      "
    >
      <div class="container" style="width: 360px">
        <h1 class="text-center border-bottom">Your cart</h1>
        <div class="row">
          <div
            v-for="(item, index) in carts"
            :key="index"
            class="col-sm-12 border-bottom mt-1"
          >
            <div class="row">
              <div class="col-sm-3">
                <img
                  v-bind:src="item.urlimg"
                  alt="n"
                  width="80px"
                  height="80px"
                />
              </div>
              <div class="col-sm-9" style="position: relative">
                <i
                  class="fas fa-times"
                  style="color: red; position: absolute;right: 20px;top: 2px;"
                  v-on:click="deleteItemByItem(item)"
                ></i>
                <div style="display: inline-block; font-weight: 900">
                  {{ item.name }}
                </div>
                <p>{{ item.cost }}$</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-4 text-center">
            <span calss="text-center" style="color: blue"
              >{{ carts.length }} Item, $ {{ sum }}
            </span>
          </div>
          <div class="col-md-6 text-center mt-3">
            <button
              type="button"
              class="btn btn-success mr-3"
              v-on:click="gotToDetailPayPage()"
            >
              Check out <i class="fab fa-cc-paypal"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Cart',
  methods: {
    deleteItemByItem(item) {
      this.$store.commit('removeAnItemFromCart', item);
    },
    async gotToDetailPayPage() {
      const parsed = await JSON.stringify(this.carts);
      await localStorage.setItem('carts', parsed);
      this.$router.push('detailcart');
    },
  },
  computed: mapState(['carts', 'cart_status', 'sum']),
};
</script>
<style>
</style>