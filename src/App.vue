<template>
  <div id="app">
    <app-header></app-header>
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
          <b-card no-body>
            <b-tabs
              pills
              card
              active-nav-item-class="font-weight-bold bg-light"
              nav-item-class="text-danger"
              active-tab-class=""
              class="dark">
              <b-tab title="Character" active title-link-class="text-dark">
                <b-form-group>
                  <b-form-checkbox
                    v-for="character in characters"
                    :key="character"
                    :id="character"
                    :value="character"
                    name="character_box"
                    class="my-1 dark"
                    v-model="selectedCharacters">
                    {{ character }}
                  </b-form-checkbox>
                </b-form-group>
              </b-tab>
              <b-tab title="Linage" title-link-class="text-dark">
                <b-form-group>
                  <b-form-checkbox
                    v-for="linage in linages"
                    :key="linage"
                    :id="linage"
                    :value="linage"
                    name="linage_box"
                    class="my-1"
                    v-model="selectedLinages">
                    {{ linage }}
                  </b-form-checkbox>
                </b-form-group>
              </b-tab>
              <b-tab title="Domain" title-link-class="text-dark">
                <b-form-group>
                  <b-form-checkbox
                    v-for="domain in domains"
                    :key="domain"
                    :id="domain"
                    :value="domain"
                    name="domain_box"
                    class="my-1"
                    v-model="selectedDomains">
                    {{ domain }}
                  </b-form-checkbox>
                </b-form-group>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import appDeck from './components/Deck.vue';
import appHeader from './components/Header.vue';

const characterList = ['Ariaspes', 'Tegu', 'Miselda', 'Zevrane', 'Jaleesa', 'Raganhar', 'Thenoch', 'Virgiliu', 'Wachiwi'];
const linageList = ['The Animist', 'The Demonologist', 'The Bloodlord', 'The Necromancer', 'The Shapeshifter', 'The Druid'];
const domainList = ['Of the Forgotton Temple', 'Of the Outcast Sanctuary', 'Of the Haunted Forest', 'Of the Screaming Coast', 'Of the Bloodsoaked Fjord', 'Of the Lunatic Asylum', 'Of the Royal Palace', 'Of the Witch Mountain'];

export default {
  name: 'app',
  data() {
    return {
      characters: characterList.slice(),
      linages: linageList.slice(),
      domains: domainList.slice(),
      decks: [],
      selectedCharacters: characterList.slice(),
      selectedLinages: linageList.slice(),
      selectedDomains: domainList.slice(),
    };
  },
  methods: {
    generate_deck() {
      this.decks = [];

      // copy avaiable deck options
      const remainingCharacter = this.selectedCharacters.slice();
      const remainingLinage = this.selectedLinages.slice();
      const remainingDomain = this.selectedDomains.slice();

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
    appHeader,
  },
};
</script>

<style>
  .my-buttons .active {
    color: #fff !important;
    background-color: #28a745 !important;
    border-color: #28a745 !important;
  }
</style>
