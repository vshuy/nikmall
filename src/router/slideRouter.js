import DashboardSlide from '../views/slide/DashboardSlide.vue';
import UploadSlide from '../views/slide/UploadSlide.vue';
export const slideRouter = [
  {
    path: '/uploadslide',
    name: 'uploadslide',
    component: UploadSlide,
  },
  {
    path: '/dashboardslide',
    name: 'dashboardslide',
    component: DashboardSlide,
  },
];
