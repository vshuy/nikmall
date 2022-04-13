<template>
  <div class="col-sm-12">
    <slider animation="fade" v-model="sliderIndex">
      <slider-item
        v-for="(i, index) in list"
        :key="index"
        :style="i"
        @click="hello"
      >
        <img v-bind:src="i.urlimg" style="width: 100%" />
      </slider-item>
    </slider>
  </div>
</template>
<script>
import { RESOURCE_SLIDE } from './../api/api';
import { Slider, SliderItem } from 'vue-easy-slider';
import axios from 'axios';

export default {
  name: 'Slide',
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      sliderIndex: 1,
      list: [],
    };
  },
  methods: {
    hello($event) {
      console.log(`hello index: ${$event}`);
    },
    async getListSlide() {
      const result = await axios.get(`${RESOURCE_SLIDE}`);
      return result.data;
    },
    async getData() {
      this.list = await this.getListSlide();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
</style>
