<template lang="">
 <div class="container">
    <h1>Update product page</h1>
    <input
      type="text"
      :value="product.name"
      @input="setName"
      class="form-control name-form"
      placeholder="Enter product name here"
    />
    <input
      type="number"
      :value="product.cost"
      @input="setCost"
      class="form-control cost-form"
      placeholder="Enter cost product"
    />
    <select :value="product.category_id" @input="setCategoryId">
      <option disabled value="">Please select one</option>
      <option
        v-for="(option, index) in categories"
        v-bind:value="option.id"
        :key="index"
      >
        {{ option.type_product }}
      </option>
    </select>
    <pre></pre>
    <img
      style="border-radius: 12px"
      v-bind:src="product.link_thumbnail"
      alt="n"
      width="auto"
      height="250px"
    />
    <pre></pre>
    <ckeditor
      :value="product.content_post"
      @input="setContentPost"
      :config="editorConfig"
    ></ckeditor>
    <button v-on:click="update()" class="w-20 btn btn-lg btn-primary">
      Upload product
    </button>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  name: 'ProductEdit',
  data() {
    return {
      editorConfig: {
        height: 600,
      },
    };
  },
  metaInfo: {
    title: 'products edit',
    script: [],
  },
  computed: {
    ...mapState('product', {
      product: (state) => state.product,
      categories: (state) => state.categories,
    }),
  },
  methods: {
    ...mapMutations('product', {
      setName: 'setName',
      setCategoryId: 'setCategoryId',
      setContentPost: 'setContentPost',
      setCost: 'setCost',
    }),
    ...mapActions('product', {
      show: 'show',
      update: 'update',
      initStore: 'initStore',
    }),
  },
  mounted() {
    this.initStore();
    this.show(this.$route.params.id);
  },
};
</script>
<style>
.name-form {
  width: 600px;
}
.cost-form {
  width: 300px;
}
</style>
