import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home.vue';
import Login from '../views/auth/Login.vue';
import UploadProduct from '../views/product/UploadProduct.vue';
import ProductDetail from '../views/product/ProductDetail.vue';
import UploadCategory from '../views/category/UploadCategory.vue';
import DashboardSlide from '../views/slide/DashboardSlide.vue';
import DashboardProduct from '../views/product/DashboardProduct.vue';
import UploadSlide from '../views/slide/UploadSlide.vue';
import DashboardCategory from '../views/category/DashboardCategory.vue';
import EditCategory from '../views/category/EditCategory.vue';
import CartDetail from '../views/CartDetail.vue';
import DashboardBill from '../views/bill/DashboardBill.vue';
import DetailBill from '../views/bill/DetailBill.vue';
import UpdateProduct from '../views/product/UpdateProduct.vue';
import ListOrdered from '../views/historyorder/ListOrdered.vue'
import paypal from '../views/Paypal.vue'
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/uploadproduct',
      name: 'uploadproduct',
      component: UploadProduct,
    },
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
      path: '/uploadslide',
      name: 'uploadslide',
      component: UploadSlide,
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
    {
      path: '/detailbill/:id',
      name: 'detailbill',
      component: DetailBill,
    },
    {
      path: '/detailcart',
      name: 'detailcart',
      component: CartDetail,
    },
    {
      path: '/dashboardslide',
      name: 'dashboardslide',
      component: DashboardSlide,
    },
    {
      path: '/dashboardproduct',
      name: 'dashboardproduct',
      component: DashboardProduct,
    },
    {
      path: '/dashboardcategory',
      name: 'dashboardcategory',
      component: DashboardCategory,
    },
    {
      path: '/dashboardbill',
      name: 'dashboardbill',
      component: DashboardBill,
    },
    {
      path: '/listorder',
      name: 'listorder',
      component: ListOrdered,
    },
    {
      path: '/paypal',
      name: 'paypal',
      component: paypal,
    },
  ],
});
