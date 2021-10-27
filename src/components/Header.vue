<template>
  <div class="col-sm-12 rounded-3">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #e1e1e1"
    >
      <router-link class="navbar-brand" to="/">
        <div
          class="mt-1"
          style="
            font-family: 'Roboto', sans-serif;
            font-size: 40px;
            font-weight: 950;
            color: #003497;
          "
        >
          NIK
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/listorder" class="nav-link active"
              >Order history</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link active">About us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Contact</router-link>
          </li>
        </ul>
      </div>
      <form
        class="
          form-inline
          my-2 my-lg-0
          mr-5
          collapse
          navbar-collapse
          search-form
        "
      >
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search_input_value"
          v-on:input="searchItems(search_input_value)"
        />
        <i class="fas fa-search"></i>
        <dl class="list-suggestion-items" style="top: 38px; z-index: 6000">
          <dt
            v-for="(item, index) in suggestions"
            :key="index"
            class="item-suggestion"
          >
            <router-link
              :to="{ name: 'detailproduct', params: { id: item.id } }"
            >
              {{ item.name }}
            </router-link>
          </dt>
        </dl>
      </form>
      <div
        class="cart_icon mr-1"
        @mouseover="$store.commit('setStatus', true)"
        @mouseleave="$store.commit('setStatus', false)"
      >
        <i class="fas fa-shopping-cart nav_icon"></i>
        <span class="badge bg-danger badge-pill cart_number">{{
          carts.length
        }}</span>
      </div>
      <div v-if="status_login === 'true'" class="dropdown navbar">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ user_name }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link
            v-if="user_name === 'admin'"
            class="dropdown-item"
            to="/dashboardproduct"
            >Dashboard</router-link
          >
          <a class="dropdown-item" v-on:click="logOut()">Logout</a>
        </div>
      </div>
      <div v-else class="dropdown navbar">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          account
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link class="dropdown-item" to="/login">Login</router-link>
          <a class="dropdown-item" v-bind:href="url_register"> Register </a>
        </div>
      </div>
    </nav>
    <Cart v-show="cart_status"></Cart>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Cart from './Cart.vue';
const axios = require('axios');
import { BASE_URL } from './../api/api';
import { RESOURCE_PRODUCT } from './../api/api';
import { RESOURCE_USER } from './../api/api';
export default {
  name: 'Header',
  data() {
    return {
      status_login: this.$cookies.get('status_login'),
      user_name: this.$cookies.get('user_name'),
      url_register: `${BASE_URL}/register`,
      suggestions: [],
      search_input_value: '',
    };
  },
  components: {
    Cart,
  },
  methods: {
    async logOut() {
      const result = await axios.post(
        `${RESOURCE_USER}/logout`,
        {},
        {
          headers: {
            Authorization: this.$cookies.get('token'),
          },
        },
      );
      this.$cookies.set('status_login', false, '720h');
      this.$cookies.set('user_id', null, '720h');
      this.status_login = false;
      console.log(result.data);
      return result.data;
    },
    async getSuggestionItemByText(text) {
      const result = await axios.post(`${RESOURCE_PRODUCT}/search`, {
        text: text,
      });
      return result.data;
    },
    async searchItems(text) {
      if (text !== '') {
        this.suggestions = await this.getSuggestionItemByText(text);
      } else {
        this.suggestions = [];
      }
    },
  },
  computed: mapState(['carts', 'cart_status']),
};
</script>
<style>
.cart_icon {
  position: relative;
}
.cart_number {
  position: absolute;
  top: -5px;
  right: -10px;
  padding: 1px 9px;
}
.nav_icon {
  font-size: 30px;
}
.search-form {
  position: relative;
}
.list-suggestion-items {
  position: absolute;
}
.item-suggestion {
  background-color: rgb(255, 255, 255);
}
dt:hover {
  background-color: rgb(58, 150, 180);
}
</style>
