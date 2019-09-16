<template>
  <div>
    <b-container>
      <b-row class="mt-3">
        <b-col>
          <b-button variant="outline-dark" @click="generate_deck">Generate Decks</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-lg-4 col-md-6 col-12" v-for="(deck, index) in decks" :key="deck.character">
          <app-deck :deck=deck :deck_number="index + 1"></app-deck>
        </b-col>
      </b-row>
    </b-container>
    <hr>
    <b-container>
      <b-row>
        <b-col>
          <h2 class="text-dark">Packs</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mb-4">
          <app-pack-selection></app-pack-selection>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import appDeck from './Deck.vue';
import appPackSelection from './PackSelection.vue';

export default {
  computed: {
    selectedPacks() { return this.$store.getters['packs/selectedPacks']; },
  },
  data() {
    return {
      decks: [],
    };
  },
  methods: {
    generate_deck() {
      this.decks = [];

      // copy avaiable deck options
      const remainingCharacter = this.selectedPacks.characters.slice();
      const remainingLinage = this.selectedPacks.linages.slice();
      const remainingDomain = this.selectedPacks.domains.slice();

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
    appPackSelection,
  },
};
</script>
