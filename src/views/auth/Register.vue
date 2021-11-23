<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
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
                        class="form-control ml-3"
                        placeholder="Enter your Name"
                      />
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
                        class="form-control ml-3"
                        placeholder="Enter your Email"
                      />
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
                        ><i class="fa fa-lock fa-lg mt-2" aria-hidden="true"></i
                      ></span>
                      <input
                        type="password"
                        :value="password"
                        class="form-control ml-3"
                        @input="setPassword"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                </div>
                <!-- <div class="form-group">
                  <label for="confirm" class="cols-sm-2 control-label"
                    >Confirm Password</label
                  >
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><i class="fa fa-lock fa-lg mt-2" aria-hidden="true"></i
                      ></span>
                      <input
                        type="password"
                        class="form-control ml-3"
                        name="confirm"
                        id="confirm"
                        placeholder="Confirm your Password"
                      />
                    </div>
                  </div>
                </div> -->
                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block login-button"
                    v-on:click="register"
                  >
                    Register
                  </button>
                </div>
                <span v-for="(value, name) in errors" :key="name">
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
      reFreshStatus: 'reFreshStatus',
    }),
  },
  computed: {
    ...mapState('user', {
      name: (state) => state.name,
      email: (state) => state.email,
      password: (state) => state.password,
      errors: (state) => state.errors,
      information_process: (state) => state.information_process,
    }),
  },
  mounted() {
    this.reFreshStatus();
  },
};
</script>

<style>
</style>