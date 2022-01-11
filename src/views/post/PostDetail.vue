<template lang="">
  <div>
      <h4>{{post.name}}</h4>
        <span style="font-style: italic;color :black;">{{post.views}} views</span>
        <span style="color :red;"> {{post.created_at}}</span>
      <div v-html="post.content_post"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'PostDetail',
  metaInfo: {
    title: 'Detail Post',
    script: [],
  },
  computed: {
    ...mapState('post', {
      post: (state) => state.post,
    }),
  },
  methods: {
    ...mapActions('post', {
      show: 'show',
    }),
  },
  mounted() {
    this.show(this.$route.params.id);
  },
};
</script>
<style>
</style>
