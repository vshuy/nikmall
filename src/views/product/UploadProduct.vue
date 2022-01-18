<template>
  <div class="container">
    <div class="row">
      <h1 class="col-md-12">Upload product page</h1>
      <div class="col-md-6">
        <input
          type="text"
          :value="product.name"
          @input="setName"
          class="form-control name-form d-inline-block"
          placeholder="Enter product name here"
        />
        <input
          type="number"
          :value="product.cost"
          @input="setCost"
          class="form-control cost-form d-inline-block"
          placeholder="Enter cost product"
        />
        <input
          type="number"
          :value="product.old_cost"
          @input="setOldCost"
          class="form-control cost-form"
          placeholder="Enter old cost product"
        />
        <input type="file" @change="setFileImg($event)" />
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
        <select :value="product.brand_id" @input="setBrandId">
          <option disabled value="">Please select one</option>
          <option
            v-for="(option, index) in brands"
            v-bind:value="option.id"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
        <select :value="product.memory_id" @input="setMemoryId">
          <option disabled value="">Please select one</option>
          <option
            v-for="(option, index) in memories"
            v-bind:value="option.id"
            :key="index"
          >
            {{ option.size }}
          </option>
        </select>
        <select :value="product.ram_id" @input="setRamId">
          <option disabled value="">Please select one</option>
          <option
            v-for="(option, index) in rams"
            v-bind:value="option.id"
            :key="index"
          >
            {{ option.size }}
          </option>
        </select>
      </div>
      <div class="col-md-6">
        <img
          style="border-radius: 12px"
          v-bind:src="product.link_thumbnail"
          alt="n"
          width="auto"
          height="150px"
        />
      </div>
    </div>

    <ckeditor
      :value="product.content_post"
      @input="setContentPost"
      :config="editorConfig"
    ></ckeditor>
    <button v-on:click="store()" class="w-20 btn btn-lg btn-primary">
      Upload product
    </button>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'UploadProduct',
  data() {
    return {
      editorConfig: {
        height: 600,
      },
    };
  },
  metaInfo: {
    title: 'products upload page',
    script: [],
  },
  computed: {
    ...mapState('product', {
      product: (state) => state.product,
      categories: (state) => state.categories,
      brands: (state) => state.brands,
      memories: (state) => state.memories,
      rams: (state) => state.rams,
      file_img_to_upload: (state) => state.file_img_to_upload,
    }),
  },
  methods: {
    ...mapMutations('product', {
      setName: 'setName',
      setCategoryId: 'setCategoryId',
      setRamId: 'setRamId',
      setBrandId: 'setBrandId',
      setMemoryId: 'setMemoryId',
      setContentPost: 'setContentPost',
      setFileImg: 'setFileImg',
      setCost: 'setCost',
      setOldCost: 'setOldCost',
    }),
    ...mapActions('product', {
      store: 'store',
      initStore: 'initStore',
    }),
  },
  mounted() {
    this.initStore();
  },
};
</script>
<style>
.name-form {
  width: 100%;
}
.cost-form {
  width: 200px;
}
</style>
