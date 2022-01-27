import PostCreate from '../views/post/PostCreate.vue';
import PostShow from '../views/post/PostShow.vue';
import PostIndex from '../views/post/PostIndex.vue';

export const postRouter = [
  {
    path: '/uploadpost',
    name: 'uploadpost',
    component: PostCreate,
  },
  {
    path: '/listpost',
    name: 'listpost',
    component: PostIndex,
  },
  {
    path: '/detailpost/:id',
    name: 'detailpost',
    component: PostShow,
  },
];
