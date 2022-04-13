import BillShow from '../views/bill/BillShow.vue';
import BillEdit from '../views/bill/BillEdit.vue';
export const billRouter = [
  {
    path: '/bill-show/:id',
    name: 'bill-show',
    component: BillShow,
  },
  {
    path: '/bill-edit/:id',
    name: 'bill-edit',
    component: BillEdit,
  },
];
