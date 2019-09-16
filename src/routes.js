import appDeckGeneration from './components/deck-generation/DeckGeneration.vue';
import appCardList from './components/card-list/CardList.vue';

export const routes = [
  { path: '/cardList', component: appCardList },
  { path: '/generateDeck', component: appDeckGeneration },
  { path: '/', component: appDeckGeneration },
];
export { routes as default };
