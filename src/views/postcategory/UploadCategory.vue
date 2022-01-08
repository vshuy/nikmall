<template>
  <div class="container">
    <h1>Upload post category page</h1>
    <input
      type="text"
      :value="category.name"
      @input="setName"
      class="form-control form"
      placeholder="Enter category name here"
    />
    <input
      type="text"
      :value="category.describe"
      @input="setDescribe"
      class="form-control form"
      placeholder="Enter desctibe here"
    />
    <button
      v-on:click="store()"
      class="w-20 btn btn-lg btn-primary"
    >
      Update Category
    </button>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'UploadCategory',
  methods: {
    ...mapMutations('postCategory', {
      setName: 'setName',
      setDescribe: 'setDescribe',
    }),
    ...mapActions('postCategory', {
      store: 'store',
    }),
  },
  computed: {
    ...mapState('postCategory', {
      category: (state) => state.category,
    }),
  },
  mounted() {

  },
};
</script>
<style scoped>
.form {
  width: 600px;
}
</style>
