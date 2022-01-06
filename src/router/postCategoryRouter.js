import UploadCategory from '../views/postcategory/UploadCategory.vue';
import EditCategory from '../views/postcategory/EditCategory.vue';
export const categoryRouter = [
  {
    path: '/upload_post_category',
    name: 'upload_post_category',
    component: UploadCategory,
  },
  {
    path: '/update_post_category',
    name: 'update_post_category',
    component: EditCategory,
  },
];
