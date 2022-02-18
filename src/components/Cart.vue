<template>
  <div
    style="position: relative"
    @mouseover="setStatus(true)"
    @mouseleave="setStatus(false)"
  >
    <div
      class="bg-light pb-4"
      style="
        position: absolute;
        z-index: 999999;
        right: 0px;
        top: -27px;
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
            class="col-sm-12 border-bottom p-1"
          >
            <div class="row">
              <div class="col-sm-3">
                <img
                  v-bind:src="item.link_thumbnail"
                  alt="n"
                  width="80px"
                  height="80px"
                />
              </div>
              <div class="col-sm-9" style="position: relative">
                <i
                  class="fas fa-times"
                  style="color: red; position: absolute; right: 20px; top: 2px"
                  v-on:click="removeFromCart(item)"
                ></i>
                <div style="display: inline-block; font-weight: 900">
                  {{ item.name }}
                </div>
                <div>{{ item.cost }}$</div>
                <div>
                  <i
                    class="fas fa-plus"
                    v-on:click="plusItem(item)"
                    style="background-color: white; font-size: 25px"
                  ></i>
                  <span style="font-size: 17px;padding: 7px;">{{ item.quantity }}</span>
                  <i
                    class="fas fa-minus"
                    v-on:click="minusItem(item)"
                    style="background-color: white; font-size: 25px"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-4 text-center">
            <span class="text-center" style="color: blue"
              >{{ carts.length }} Item, $ {{ total_state }}
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
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Cart',
  methods: {
    async gotToDetailPayPage() {
      const parsed = await JSON.stringify(this.carts);
      await localStorage.setItem('carts', parsed);
      this.$router.push('/detailcart');
    },
    ...mapMutations('cart', {
      removeFromCart: 'removeAnItemFromCart',
      setStatus: 'setStatus',
      plusItem: 'plusItem',
      minusItem: 'minusItem',
    }),
  },
  // computed: mapState(['carts', 'cart_status', 'sum']),
  computed: {
    ...mapState({
      carts: (state) => state.cart.carts,
      cart_status: (state) => state.cart.cart_status,
      sum: (state) => state.cart.sum,
    }),
    ...mapGetters('cart', {
      total_state: 'total_state',
    }),
  },
};
</script>
<style>
</style>