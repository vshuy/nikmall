<template>
  <div class="container">
    <div class="row">
      <h4>List posts</h4>
      <div v-for="(item, index) in posts" :key="index" class="col-md-12 mt-3">
        <router-link :to="{ name: 'detailpost', params: { id: item.id } }">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <img
                  style="border-radius: 12px"
                  v-bind:src="item.link_thumbnail"
                  alt="n"
                  width="auto"
                  height="160px"
                />
              </div>
              <div class="col-md-8">
                <div>{{ item.name }}</div>
                <div>{{ item.created_at }}</div>
                <div>{{ item.views }} <i class="fas fa-eye"></i></div>
                <div>{{ item.likes }} <i class="fas fa-heart"></i></div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ListPost',
  metaInfo: {
    title: 'List Post page',
    script: [],
  },
  computed: {
    ...mapState('post', {
      posts: (state) => state.posts,
    }),
  },
  methods: {
    ...mapActions('post', {
      index: 'index',
    }),
  },
  mounted() {
    this.index();
  },
};
</script>

<style>
</style>