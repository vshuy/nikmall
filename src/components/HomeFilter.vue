<template>
  <div>
    <div class="ml-3 mt-3 d-inline-block">
      <label for="sort" class="mr-3">Sort by </label>
      <select name="sort" v-model="filters.order">
        <option value="default">Date added</option>
        <option value="asc">Price: Low to high</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
    <div class="d-inline-block ml-3">
      <i
        class="fas fa-filter"
        style="font-size: 20px"
        @mouseover="setStatus(true)"
        @mouseleave="setStatus(false)"
      ></i>
    </div>
    <div style="position: relative">
      <div
        v-show="filter_status"
        class="bg-light pb-4 border"
        style="
          position: absolute;
          z-index: 999999;
          left: 0px;
          top: -12px;
          padding: 0px;
          border-radius: 12px;
        "
        @mouseover="setStatus(true)"
        @mouseleave="setStatus(false)"
      >
        <div class="container" style="">
          <div class="row">
            <div class="col-md-3">
              <span> Ram </span>
              <div v-for="(option, index) in rams" :key="index">
                <input
                  type="checkbox"
                  :value="option.id"
                  v-model="filters.ram_ids"
                />
                <label class="ml-1">{{ option.size }}</label>
              </div>
              <button
                type="button"
                class="btn btn-success mr-3 mt-5"
                v-on:click="apply()"
              >
                Apply
              </button>
            </div>
            <div class="col-md-3">
              <span> Brand </span>
              <div v-for="(option, index) in brands" :key="index">
                <input
                  type="checkbox"
                  :value="option.id"
                  v-model="filters.brand_ids"
                />
                <label class="ml-1"> {{ option.name }}</label>
              </div>
            </div>
            <div class="col-md-3">
              <span> Memory </span>
              <div v-for="(option, index) in memories" :key="index">
                <input
                  type="checkbox"
                  :value="option.id"
                  v-model="filters.memory_ids"
                />
                <label class="ml-1"> {{ option.size }}</label>
              </div>
            </div>
            <div class="col-md-3">
              <span> Battery </span>
              <div v-for="(option, index) in batteries" :key="index">
                <input
                  type="checkbox"
                  :value="option.id"
                  v-model="filters.battery_ids"
                />
                <label class="ml-1"> {{ option.size }}</label>
              </div>
            </div>
            <div class="col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  RESOURCE_FILTERS,
} from './../api/api.js';
import { normalApi } from './../api/apiService.js';
import { mapMutations, mapActions } from 'vuex';
export default {
  name: 'HomeFilter',
  data() {
    return {
      filters: {
        order: 'default',
        ram_ids: [],
        brand_ids: [],
        memory_ids: [],
        battery_ids: [],
      },
      filter_status: false,
      rams: [],
      brands: [],
      memories: [],
      batteries: [],
    };
  },
  methods: {
    ...mapMutations('product', {
      setFilters: 'setFilters',
    }),
    ...mapActions('product', {
      index: 'index',
    }),
    async initStore() {
      const resourceFilter = await normalApi.get(`${RESOURCE_FILTERS}`);
      this.rams = resourceFilter.data.rams;
      this.brands = resourceFilter.data.brands;
      this.memories = resourceFilter.data.memories;
      this.batteries = resourceFilter.data.batteries;
    },
    setStatus(status) {
      this.filter_status = status;
    },
    apply() {
      this.setFilters(this.filters);
      this.index();
      this.filter_status = false;
    },
  },
  computed: {
    afterOrderChange() {
      return this.filters.order;
    },
  },
  watch: {
    afterOrderChange() {
      this.apply();
    },
  },
  mounted() {
    this.initStore();
  },
};
</script>
<style>
</style>