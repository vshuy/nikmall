import UploadCategory from '../views/category/UploadCategory.vue';
import DashboardCategory from '../views/category/DashboardCategory.vue';
import EditCategory from '../views/category/EditCategory.vue';
export const categoryRouter = [
  {
    path: '/uploadcategory',
    name: 'uploadcategory',
    component: UploadCategory,
  },
  {
    path: '/updatecategory',
    name: 'updatecategory',
    component: EditCategory,
  },
  {
    path: '/dashboardcategory',
    name: 'dashboardcategory',
    component: DashboardCategory,
  },
];
