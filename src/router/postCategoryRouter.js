import PostCategoryCreate from '../views/postcategory/PostCategoryCreate.vue';
import PostCategoryEdit from '../views/postcategory/PostCategoryEdit.vue';
export const postCategoryRouter = [
  {
    path: '/upload_post_category',
    name: 'upload_post_category',
    component: PostCategoryCreate,
  },
  {
    path: '/update_post_category',
    name: 'update_post_category',
    component: PostCategoryEdit,
  },
];
