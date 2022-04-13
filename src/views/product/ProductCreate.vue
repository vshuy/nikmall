<template>
  <div class="container">
    <div class="row">
      <h1 class="col-md-12">Upload product page</h1>
      <div class="col-md-10">
        <span>Name</span>
        <input
          type="text"
          :value="product.name"
          @input="setName"
          class="form-control name-form d-inline-block"
          placeholder="Enter product name here"
        />
        <span>Cost </span>
        <input
          type="number"
          :value="product.cost"
          @input="setCost"
          class="form-control cost-form d-inline-block"
          placeholder="Enter cost product"
        />
        <span> Old cost </span>
        <input
          type="number"
          :value="product.old_cost"
          @input="setOldCost"
          class="form-control cost-form d-inline-block"
          placeholder="Enter old cost product"
        />
        <span> Quantity </span>
         <input
          type="number"
          :value="product.quantity"
          @input="setQuantity"
          class="form-control cost-form d-inline-block"
          placeholder="Enter quantity of product"
        />
        <input type="file" @change="setFileImg($event)" />
        <span> Category </span>
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
        <span> Brand </span>
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
        <span> Storage </span>
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
        <span> Ram </span>
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
        <span> Display size </span>
        <select :value="product.display_id" @input="setDisplayId">
          <option disabled value="">Please select one</option>
          <option
            v-for="(option, index) in display_sizes"
            v-bind:value="option.id"
            :key="index"
          >
            {{ option.size }}
          </option>
        </select>
        <span> Battery size </span>
        <select :value="product.battery_id" @input="setBatteryId">
          <option disabled value="">Please select one</option>
          <option
            v-for="(option, index) in batteries"
            v-bind:value="option.id"
            :key="index"
          >
            {{ option.size }}
          </option>
        </select>
        <span> OS </span>
        <select :value="product.operating_system_id" @input="setOperatingSystemId">
          <option disabled value="">Please select one</option>
          <option
            v-for="(option, index) in operating_systems"
            v-bind:value="option.id"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <div class="col-md-2">
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
  name: 'ProductCreate',
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
      batteries: (state) => state.batteries,
      display_sizes: (state) => state.display_sizes,
      operating_systems: (state) => state.operating_systems,
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
      setBatteryId: 'setBatteryId',
      setDisplayId: 'setDisplayId',
      setOperatingSystemId: 'setOperatingSystemId',
      setContentPost: 'setContentPost',
      setFileImg: 'setFileImg',
      setCost: 'setCost',
      setOldCost: 'setOldCost',
      setQuantity: 'setQuantity',
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
