<template>
  <div>
    <b-container>
      <b-row class="mt-3">
        <b-col><h1>Deck Generation</h1></b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <b-button variant="outline-dark" @click="generate_deck">Generate</b-button>
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
      const remainingLineage = this.selectedPacks.lineages.slice();
      const remainingDomain = this.selectedPacks.domains.slice();

      while (
        remainingCharacter.length > 0
        && remainingLineage.length > 0
        && remainingDomain.length > 0
      ) {
        const characterIndex = Math.floor(Math.random() * remainingCharacter.length);
        const lineageIndex = Math.floor(Math.random() * remainingLineage.length);
        const domainIndex = Math.floor(Math.random() * remainingDomain.length);
        this.decks.push({
          character: remainingCharacter[characterIndex],
          lineage: remainingLineage[lineageIndex],
          domain: remainingDomain[domainIndex],
        });
        remainingCharacter.splice(characterIndex, 1);
        remainingLineage.splice(lineageIndex, 1);
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
