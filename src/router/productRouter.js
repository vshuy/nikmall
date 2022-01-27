import ProductEdit from '../views/product/ProductEdit.vue';
import ProductShow from '../views/product/ProductShow.vue';
import ProductCreate from '../views/product/ProductCreate.vue';

export const productRouter = [
  {
    path: '/uploadproduct',
    name: 'uploadproduct',
    component: ProductCreate,
  },
  {
    path: '/detailproduct/:id',
    name: 'detailproduct',
    component: ProductShow,
  },
  {
    path: '/updateproduct',
    name: 'updateproduct',
    component: ProductEdit,
  },
];
