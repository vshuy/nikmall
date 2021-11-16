import DashboardBill from '../views/bill/DashboardBill.vue';
import DetailBill from '../views/bill/DetailBill.vue';
export const billRouter = [
  {
    path: '/detailbill/:id',
    name: 'detailbill',
    component: DetailBill,
  },
  {
    path: '/dashboardbill',
    name: 'dashboardbill',
    component: DashboardBill,
  },
];
