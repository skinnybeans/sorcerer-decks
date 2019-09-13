<template>
  <div id="app">
    <app-header></app-header>
    <b-container>
      <app-deck-generation></app-deck-generation>
    </b-container>
  </div>
</template>

<script>

import appHeader from './components/Header.vue';
import appDeckGeneration from './components/DeckGeneration.vue';

export default {
  name: 'app',
  components: {
    appHeader,
    appDeckGeneration,
  },
};
</script>
