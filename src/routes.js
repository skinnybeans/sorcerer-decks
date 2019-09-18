import appDeckGeneration from './components/deck-generation/DeckGeneration.vue';
import appCardList from './components/card-list/CardList.vue';
import appLanding from './components/Landing.vue';

export const routes = [
  { path: '/cardlist', component: appCardList },
  { path: '/deckgeneration', component: appDeckGeneration },
  { path: '/', component: appLanding },
];
export { routes as default };
