<template lang="">
  <div class="container-fluid">
          <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                  <router-link class="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/" style="color:green">NIK</router-link>
                  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
                  <ul class="navbar-nav px-3">
                      <li class="nav-item text-nowrap">
                      </li>
                  </ul>
          </header>
          <div class="container-fluid">
              <div class="row">
                  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                      <div class="position-sticky pt-3">
                          <ul class="nav flex-column">
                               <li class="nav-item">                                  
                                  <a class="nav-link active" v-on:click="change('ProductManage')">Dashboard product</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('BillManage')">Dashboard bill</a>
                              </li>
                               <li class="nav-item">                                  
                                  <a class="nav-link active" v-on:click="change('SlideManage')">Dashboard slide</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('CategoryManage')">Dashboard Category</a>
                              </li>
                               <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('PostCategoryManage')">Dashboard Post Category</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('UploadSlide')">Upload slide</a>
                              </li>
                               <li class="nav-item">                                  
                                  <router-link class="nav-link active" to="/uploadproduct">Upload product</router-link>
                              </li>
                               <li class="nav-item">                                  
                                  <router-link class="nav-link active" to="/uploadpost">Upload post</router-link>
                              </li>
                              <li class="nav-item">                                  
                                  <router-link class="nav-link active" to="/role-index">Role dashboard</router-link>
                              </li>
                               <li class="nav-item">                                  
                                  <router-link class="nav-link active" to="/permission-index">Permission dashboard</router-link>
                              </li>
                              <li class="nav-item">                                  
                                  <router-link class="nav-link active" to="/assign-role-index">Assign role dashboard</router-link>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('UploadCategory')">Upload category</a>
                              </li>
                               <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('UploadPostCategory')">Upload post category</a>
                              </li>
                          </ul>
                      </div>
                  </nav>
                  <component :is="currentComponent"></component>
          </div>
      </div>
  </div>
</template>
<script>
import ProductManage from '../views/product/ProductManage.vue';
import SlideManage from '../views/slide/SlideMange.vue';
import BillManage from '../views/bill/BillManage.vue';
import CategoryManage from '../views/category/CategoryManage.vue';
import PostCategoryManage from '../views/postcategory/CategoryManage.vue';
import UploadPostCategory from '../views/postcategory/UploadCategory.vue';
import UploadCategory from '../views/category/UploadCategory.vue';
import UploadSlide from '../views/slide/UploadSlide.vue';
export default {
  name: 'Dashboard',
  data() {
    return {
      currentComponent: 'ProductManage',
    };
  },
  methods: {
    change(nameComponent) {
      this.currentComponent = nameComponent;
    },
  },
  components: {
    ProductManage,
    SlideManage,
    BillManage,
    CategoryManage,
    PostCategoryManage,
    UploadCategory,
    UploadPostCategory,
    UploadSlide,
  },
};
</script>
<style>
/* @import './../assets/css/dashboard.css'; */
</style>
