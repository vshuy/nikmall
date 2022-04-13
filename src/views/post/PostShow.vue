<template lang="">
  <div class="container">
    <div class="row">
      <Header></Header>
      <div class="col-md-12">
        <p>{{ post.name }}</p>
        <img v-bind:src="post.link_thumbnail" alt="not found" />
        <div style="font-style: italic;color :black;">
          {{ post.views }} views
        </div>
        <div style="color :red;">{{ post.created_at }}</div>
        <div v-html="post.content_post"></div>
        <CommentPost v-bind:post_id_pr="post.id"></CommentPost>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header.vue';
import CommentPost from '../../components/CommentPost.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'PostShow',
  components: {
    Header,
    CommentPost,
  },
  metaInfo: {
    title: 'Detail Post',
    script: [],
  },
  computed: {
    ...mapState('post', {
      post: state => state.post,
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
<style></style>
