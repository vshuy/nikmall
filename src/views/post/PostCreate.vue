<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h5>Upload post page</h5>
        <input
          type="text"
          :value="post.name"
          @input="setName"
          class="form-control form"
          placeholder="Enter post name here"
        />
        <select :value="post.category_id" @input="setCategoryId">
          <option disabled value="">Please select a category</option>
          <option
            v-for="(option, index) in categories"
            v-bind:value="option.id"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
        <pre></pre>
        <label for="avatar">Choose a thumbnail img</label>
        <input type="file" @change="setFileImg($event)" />
        <pre></pre>
      </div>
      <div class="col-md-6">
        <img
          style="border-radius: 12px"
          v-bind:src="post.link_thumbnail"
          alt="n"
          width="auto"
          height="128px"
        />
      </div>
    </div>
    <ckeditor
      :value="post.content_post"
      @input="setContentPost"
      :config="editorConfig"
    ></ckeditor>
    <button v-on:click="store()" class="w-20 btn btn-lg btn-primary">
      Upload post
    </button>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';

export default {
  name: 'PostCreate',
  metaInfo: {
    title: 'UploadPost Page',
    script: [],
  },
  data() {
    return {
      editorConfig: {
        height: 600,
      },
    };
  },
  computed: {
    ...mapState('post', {
      post: state => state.post,
      categories: state => state.categories,
      link_thumbnail: state => state.link_thumbnail,
      file_img_to_upload: state => state.file_img_to_upload,
    }),
  },
  methods: {
    ...mapMutations('post', {
      setName: 'setName',
      setCategoryId: 'setCategoryId',
      setContentPost: 'setContentPost',
      setFileImg: 'setFileImg',
    }),
    ...mapActions('post', {
      store: 'store',
      initStore: 'initStore',
    }),
  },
  mounted() {
    this.initStore();
  },
};
</script>
<style></style>
