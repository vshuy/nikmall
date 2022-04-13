import PostCategoryCreate from '../views/postcategory/PostCategoryCreate.vue';
import PostCategoryEdit from '../views/postcategory/PostCategoryEdit.vue';
export const postCategoryRouter = [
  {
    path: '/post-category-create',
    name: 'post-category-create',
    component: PostCategoryCreate,
  },
  {
    path: '/post-category-edit',
    name: 'post-category-edit',
    component: PostCategoryEdit,
  },
];
