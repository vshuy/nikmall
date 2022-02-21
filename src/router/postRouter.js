import PostCreate from '../views/post/PostCreate.vue';
import PostShow from '../views/post/PostShow.vue';
import PostIndex from '../views/post/PostIndex.vue';

export const postRouter = [
  {
    path: '/post-create',
    name: 'post-create',
    component: PostCreate,
  },
  {
    path: '/post-index',
    name: 'post-index',
    component: PostIndex,
  },
  {
    path: '/post-show/:id',
    name: 'post-show',
    component: PostShow,
  },
];
