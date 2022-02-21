import CategoryCreate from '../views/category/CategoryCreate.vue';
import CategoryEdit from '../views/category/CategoryEdit.vue';
export const categoryRouter = [
  {
    path: '/category-create',
    name: 'category-create',
    component: CategoryCreate,
  },
  {
    path: '/category-edit',
    name: 'category-edit',
    component: CategoryEdit,
  },
];
