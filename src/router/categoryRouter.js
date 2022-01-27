import CategoryCreate from '../views/category/CategoryCreate.vue';
import CategoryEdit from '../views/category/CategoryEdit.vue';
export const categoryRouter = [
  {
    path: '/uploadcategory',
    name: 'uploadcategory',
    component: CategoryCreate,
  },
  {
    path: '/updatecategory',
    name: 'updatecategory',
    component: CategoryEdit,
  },
];
