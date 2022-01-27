import BillShow from '../views/bill/BillShow.vue';
export const billRouter = [
  {
    path: '/detailbill/:id',
    name: 'detailbill',
    component: BillShow,
  },
];
