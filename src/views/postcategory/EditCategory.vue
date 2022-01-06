<template lang="">
  <div class="container">
    <h1>Edit category page</h1>
    <input type="text" :value="category.type_product" @input="setName" class="form-control form"  placeholder="Enter category name here">
    <input type="text" :value="category.descripe" @input="setDescribe" class="form-control form"  placeholder="Enter desctibe here">
      <button  v-on:click="update(category.id)" class="w-20 btn btn-lg btn-primary">Update Category</button>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'EditCategory',
  methods: {
    ...mapMutations('category', {
      setName: 'setName',
      setDescribe: 'setDescribe',
    }),
    ...mapActions('category', {
      show: 'show',
      update: 'update',
    }),
  },
  computed: {
    ...mapState('category', {
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
