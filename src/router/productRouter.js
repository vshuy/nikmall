import UpdateProduct from '../views/product/UpdateProduct.vue';
import ProductDetail from '../views/product/ProductDetail.vue';
import UploadProduct from '../views/product/UploadProduct.vue';
<<<<<<< HEAD
=======
import DashboardProduct from '../views/product/DashboardProduct.vue';
>>>>>>> refs/remotes/origin/main

export const productRouter = [
  {
    path: '/uploadproduct',
    name: 'uploadproduct',
    component: UploadProduct,
  },
  {
    path: '/detailproduct/:id',
    name: 'detailproduct',
    component: ProductDetail,
  },
  {
    path: '/updateproduct',
    name: 'updateproduct',
    component: UpdateProduct,
  },
<<<<<<< HEAD
=======
  {
    path: '/dashboardproduct',
    name: 'dashboardproduct',
    component: DashboardProduct,
  },
>>>>>>> refs/remotes/origin/main
];
