<template>
  <div id="app">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/#/">
          Kill Inconveniences
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="contorl">
            <a class="button is-primary" @click="login()" v-if="!isLoggedIn">
              <strong>Login with Google</strong>
            </a>
              <img :src="user.image" alt="">
            <a class="button is-light" @click="logout()" v-if="isLoggedIn">
              LogOut
            </a>                      
          </div>
        </div>
      </div>
    </nav>
    <router-view class="main container"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout'])  
};
</script>

<style lang="scss">

.main {
  margin-top: 2em;
}
</style>
