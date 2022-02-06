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
                                  <a class="nav-link active" v-on:click="change('ProductIndex')">Dashboard product</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('BillIndex')">Dashboard bill</a>
                              </li>
                               <li class="nav-item">                                  
                                  <a class="nav-link active" v-on:click="change('SlideIndex')">Dashboard slide</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('CategoryIndex')">Dashboard Category</a>
                              </li>
                               <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('PostCategoryIndex')">Dashboard Post Category</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('SlideCreate')">Upload slide</a>
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
                                  <a class="nav-link active" v-on:click="change('CategoryCreate')">Upload category</a>
                              </li>
                               <li class="nav-item">
                                  <a class="nav-link active" v-on:click="change('PostCategoryCreate')">Upload post category</a>
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
import ProductIndex from '../views/product/ProductIndex.vue';
import SlideIndex from '../views/slide/SlideIndex.vue';
import BillIndex from '../views/bill/BillIndex.vue';
import CategoryIndex from '../views/category/CategoryIndex.vue';
import PostCategoryIndex from '../views/postcategory/PostCategoryIndex.vue';
import PostCategoryCreate from '../views/postcategory/PostCategoryCreate.vue';
import CategoryCreate from '../views/category/CategoryCreate.vue';
import SlideCreate from '../views/slide/SlideCreate.vue';
export default {
  name: 'Dashboard',
  data() {
    return {
      currentComponent: 'ProductIndex',
    };
  },
  methods: {
    change(nameComponent) {
      this.currentComponent = nameComponent;
    },
  },
  components: {
    ProductIndex,
    SlideIndex,
    BillIndex,
    CategoryIndex,
    PostCategoryIndex,
    CategoryCreate,
    PostCategoryCreate,
    SlideCreate,
  },
};
</script>
<style>
/* @import './../assets/css/dashboard.css'; */
</style>
