import UploadPost from '../views/post/UploadPost.vue';
import PostDetail from '../views/post/PostDetail.vue';

export const postRouter = [
    {
        path: '/uploadpost',
        name: 'uploadpost',
        component: UploadPost,
      },
      {
        path: '/listpost',
        name: 'listpost',
        component: UploadPost,
      },
      {
        path: '/detailpost/:id',
        name: 'detailpost',
        component: PostDetail,
      },
];
