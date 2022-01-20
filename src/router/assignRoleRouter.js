import assignRoleIndex from '../views/assignrole/AssignRoleIndex.vue';
import assignRoleEdit from '../views/assignrole/AssignRoleEdit.vue';
export const assignRoleRouter = [
    {
      path: '/assign-role-index',
      name: 'assign-role-index',
      component: assignRoleIndex,
    },
    {
      path: '/assign-role-edit',
      name: 'assign-role-edit',
      component: assignRoleEdit,
    },
  ];