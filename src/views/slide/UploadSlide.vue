<template lang="">
  <div class="container">
    <h1>Upload slide page</h1>
    <input type="text" :value="slide.nameslide"
      @input="setName" class="form-control form"  placeholder="Enter slide name here">
    <input type="file" id="file" ref="file" v-on:change="setFileImg"/>
     <pre></pre>
      <button  v-on:click="store" class="w-20 btn btn-lg btn-primary">Upload slide</button>
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
      slide: (state) => state.slide,
    }),
  },
  mounted() {
    console.log('running in mounted method');
  },
};
</script>
<style>
</style>
