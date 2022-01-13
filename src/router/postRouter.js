import UploadPost from '../views/post/UploadPost.vue';
import PostDetail from '../views/post/PostDetail.vue';
import ListPost from '../views/post/ListPost.vue';

export const postRouter = [
  {
    path: '/uploadpost',
    name: 'uploadpost',
    component: UploadPost,
  },
  {
    path: '/listpost',
    name: 'listpost',
    component: ListPost,
  },
  {
    path: '/detailpost/:id',
    name: 'detailpost',
    component: PostDetail,
  },
];
