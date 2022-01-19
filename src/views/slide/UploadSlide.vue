<template lang="">
  <div class="container">
    <h1>Upload slide page</h1>
    <input
      type="text"
      :value="slide.title"
      @input="setName"
      class="form-control form"
      placeholder="Enter slide name here"
    />
    <input type="file" @change="setFileImg($event)" />
    <pre></pre>
    <button v-on:click="store" class="w-20 btn btn-lg btn-primary">
      Upload slide
    </button>
    <pre></pre>
    <img
      style="border-radius: 12px"
      v-bind:src="slide.urlimg"
      alt="n"
      width="auto"
      height="320px"
    />
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'UploadSlide',
  methods: {
    ...mapMutations('slide', {
      setName: 'setName',
      setFileImg: 'setFileImg',
    }),
    ...mapActions('slide', {
      store: 'store',
    }),
  },
  computed: {
    ...mapState('slide', {
      slide: state => state.slide,
    }),
  },
  mounted() {
    console.log('running in mounted method');
  },
};
</script>
<style></style>
