import PermissionIndex from '../views/permission/PermissionIndex.vue';
import PermissionEdit from '../views/permission/PermissionEdit.vue';
export const permissionRouter = [
  {
    path: '/permission-index',
    name: 'permission-index',
    component: PermissionIndex,
  },
  {
    path: '/permission-edit',
    name: 'permission-edit',
    component: PermissionEdit,
  },
];
