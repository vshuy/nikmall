import Vue from 'vue';
import Vuex from 'vuex';
import cartStore from './cartStore';
import productStore from './productStore';
import userStore from './userStore';
import categoryStore from './categoryStore';
import postCategoryStore from './postCategoryStore';
import postStore from './postStore';
import roleStore from './roleStore';
import slideStore from './slideStore';
import commentStore from './commentStore';
import permissionStore from './permissionStore';
import commentPostStore from './commentPostStore';
import assignRoleStore from './assignRoleStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: cartStore,
    user: userStore,
    product: productStore,
    category: categoryStore,
    postCategory: postCategoryStore,
    post: postStore,
    role: roleStore,
    slide: slideStore,
    comment: commentStore,
    commentPost: commentPostStore,
    permission: permissionStore,
    assign_role: assignRoleStore,
  },
});
export { store as default };
