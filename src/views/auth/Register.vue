<template>
  <div>
    <div class="container">
      <div class="row"><Header></Header></div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="name" class="cols-sm-2 control-label"
                    >Your Name</label
                  >
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><i class="fa fa-user fa mt-2" aria-hidden="true"></i
                      ></span>
                      <input
                        type="text"
                        :value="name"
                        @input="setName"
                        name="name"
                        :class="{
                          'form-control ml-3': true,
                          'border border-danger': errors.has('name'),
                        }"
                        v-validate="'required'"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div v-show="errors.has('name')" class="text-danger">
                      {{ errors.first('name') }}
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email" class="cols-sm-2 control-label"
                    >Your Email</label
                  >
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><i
                          class="fa fa-envelope fa mt-2"
                          aria-hidden="true"
                        ></i
                      ></span>
                      <input
                        type="email"
                        :value="email"
                        @input="setEmail"
                        name="email"
                        :class="{
                          'form-control ml-3': true,
                          'border border-danger': errors.has('email'),
                        }"
                        v-validate="'required|email'"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div v-show="errors.has('email')" class="text-danger">
                      {{ errors.first('email') }}
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone" class="cols-sm-2 control-label"
                    >Your Phone</label
                  >
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><i class="fa fa-phone fa mt-2" aria-hidden="true"></i
                      ></span>
                      <input
                        type="number"
                        :value="phone"
                        @input="setPhone"
                        name="phone"
                        :class="{
                          'form-control ml-3': true,
                          'border border-danger': errors.has('phone'),
                        }"
                        v-validate="'digits:10'"
                        placeholder="Enter your phone"
                      />
                    </div>
                    <div v-show="errors.has('phone')" class="text-danger">
                      {{ errors.first('phone') }}
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="cols-sm-2 control-label"
                    >Password</label
                  >
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><i class="fa fa-lock fa mt-2" aria-hidden="true"></i
                      ></span>
                      <input
                        type="password"
                        name="password"
                        :value="password"
                        v-validate="'required|min:8'"
                        :class="{
                          'form-control ml-3': true,
                          'border border-danger': errors.has('password'),
                        }"
                        @input="setPassword"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div v-show="errors.has('password')" class="text-danger">
                      {{ errors.first('password') }}
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block login-button"
                    v-on:click="register"
                  >
                    Register
                  </button>
                </div>
                <span
                  v-for="(value, name) in errors"
                  :key="name"
                  style="color: red"
                >
                  {{ value[0] }}
                </span>
                <div class="login-register">
                  <router-link to="/login">Login</router-link>
                </div>
                <span style="color: red">{{ information_process }}</span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './../../components/Header.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'Register',
  metaInfo: {
    title: 'Register page',
  },
  methods: {
    ...mapActions('user', {
      register: 'register',
    }),
    ...mapMutations('user', {
      setEmail: 'setEmail',
      setPassword: 'setPassword',
      setName: 'setName',
      setPhone: 'setPhone',
      reFreshStatus: 'reFreshStatus',
    }),
  },
  computed: {
    ...mapState('user', {
      name: (state) => state.name,
      email: (state) => state.email,
      phone: (state) => state.phone,
      password: (state) => state.password,
      errors: (state) => state.errors,
      information_process: (state) => state.information_process,
    }),
  },
  mounted() {
    this.reFreshStatus();
  },
  components: {
    Header,
  },
};
</script>

<style>
</style>