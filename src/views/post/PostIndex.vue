<template>
  <div class="container">
    <div class="row">
      <Header></Header>
      <div class="col-md-12">List posts</div>
      <div v-for="(item, index) in posts" :key="index" class="col-md-12 mt-3">
        <router-link :to="{ name: 'post-show', params: { id: item.id } }">
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
import Header from '../../components/Header.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'PostIndex',
  metaInfo: {
    title: 'List Post page',
    script: [],
  },
   components: {
    Header,
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