import ProductEdit from '../views/product/ProductEdit.vue';
import ProductShow from '../views/product/ProductShow.vue';
import ProductCreate from '../views/product/ProductCreate.vue';

export const productRouter = [
  {
    path: '/product-create',
    name: 'product-create',
    component: ProductCreate,
  },
  {
    path: '/product-show/:id',
    name: 'product-show',
    component: ProductShow,
  },
  {
    path: '/product-edit',
    name: 'product-edit',
    component: ProductEdit,
  },
];
