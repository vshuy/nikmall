<template lang="">
  <div class="container">
    <h1>Edit post category page</h1>
    <input type="text" :value="category.name" @input="setName" class="form-control form"  placeholder="Enter category name here">
    <input type="text" :value="category.describe" @input="setDescribe" class="form-control form"  placeholder="Enter describe here">
      <button  v-on:click="update(category.id)" class="w-20 btn btn-lg btn-primary">Update Category</button>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'PostCategoryEdit',
  methods: {
    ...mapMutations('postCategory', {
      setName: 'setName',
      setDescribe: 'setDescribe',
    }),
    ...mapActions('postCategory', {
      show: 'show',
      update: 'update',
    }),
  },
  computed: {
    ...mapState('postCategory', {
      category: (state) => state.category,
    }),
  },
  mounted() {
    this.show(this.$route.params.id);
  },
};
</script>
<style scoped>
.form {
  width: 600px;
}
</style>
