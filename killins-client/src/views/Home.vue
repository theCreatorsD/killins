<template>
  <div class="home">    
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App."/>-->
    <a class="button is-danger" @click="login()">Danger</a>

  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapActions } from 'vuex';

export default {
  name: "home",
  methods: mapActions('auth', ['login']),
};
</script>
