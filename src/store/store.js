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
import checkoutStore from './checkoutStore';
import historyOrderStore from './historyOrderStore';
import billStore from './billStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: cartStore,
    user: userStore,
    product: productStore,
    category: categoryStore,
    postCategory: postCategoryStore,
    post: postStore,
    bill: billStore,
    role: roleStore,
    slide: slideStore,
    comment: commentStore,
    commentPost: commentPostStore,
    permission: permissionStore,
    assign_role: assignRoleStore,
    checkout: checkoutStore,
    historyOrder: historyOrderStore,
  },
});
export { store as default };
