<template>
  <div id="app">
    <b-container>
      <b-row class="mt-3">
        <b-col>
          <b-button variant="outline-primary" @click="generate_deck">Generate Decks</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-md-6 col-12" v-for="(deck, index) in decks" :key="deck.character">
          <app-deck :deck=deck :deck_number="index + 1"></app-deck>
        </b-col>
      </b-row>
    </b-container>
    <hr>
    <b-container>
      <b-row>
        <b-col>
          <h2 class="text-primary">Settings</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          Settings go here
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import appDeck from './components/Deck.vue';

export default {
  name: 'app',
  data() {
    return {
      character: ['Ariaspes', 'Tegu', 'Miselda', 'Zevrane', 'Jaleesa', 'Raganhar', 'Thenoch', 'Virgiliu', 'Wachiwi'],
      linage: ['The Animist', 'The Demonologist', 'The Bloodlord', 'The Necromancer', 'The Shapeshifter', 'The Druid'],
      domain: ['Of the Forgotton Temple', 'Of the Outcast Sanctuary', 'Of the Haunted Forest', 'Of the Screaming Coast', 'Of the Bloodsoaked Fjord', 'Of the Lunatic Asylum', 'Of the Royal Palace', 'Of the Witch Mountain'],
      decks: [],
    };
  },
  methods: {
    generate_deck() {
      this.decks = [];

      // copy avaiable deck options
      const remainingCharacter = this.character.slice();
      const remainingLinage = this.linage.slice();
      const remainingDomain = this.domain.slice();

      while (
        remainingCharacter.length > 0
        && remainingLinage.length > 0
        && remainingDomain.length > 0
      ) {
        const characterIndex = Math.floor(Math.random() * remainingCharacter.length);
        const linageIndex = Math.floor(Math.random() * remainingLinage.length);
        const domainIndex = Math.floor(Math.random() * remainingDomain.length);
        this.decks.push({
          character: remainingCharacter[characterIndex],
          linage: remainingLinage[linageIndex],
          domain: remainingDomain[domainIndex],
        });
        remainingCharacter.splice(characterIndex, 1);
        remainingLinage.splice(linageIndex, 1);
        remainingDomain.splice(domainIndex, 1);
      }
    },
  },
  components: {
    appDeck,
  },
};
</script>

<style>
</style>
