<template>
  <div id="app">
    <app-header></app-header>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>

import appHeader from './components/Header.vue';

export default {
  name: 'app',
  components: {
    appHeader,
  },
};
</script>
