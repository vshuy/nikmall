import RoleEdit from '../views/role/RoleEdit.vue';
import RoleShow from '../views/role/RoleShow.vue';
import RoleIndex from '../views/role/RoleIndex.vue';
import RoleCreate from '../views/role/RoleCreate.vue'

export const roleRouter = [
  {
    path: '/role-edit:id',
    name: 'role-edit',
    component: RoleEdit,
  },
  {
    path: '/role-show/:id',
    name: 'role-show',
    component: RoleShow,
  },
  {
    path: '/role-index',
    name: 'role-index',
    component: RoleIndex,
  },
  {
    path: '/role-create',
    name: 'role-create',
    component: RoleCreate,
  },
];
