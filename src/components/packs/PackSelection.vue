<template>
  <b-card no-body>
    <b-tabs
      pills
      card
      active-nav-item-class="font-weight-bold bg-light"
      nav-item-class="text-danger"
      active-tab-class=""
      class="dark">
      <b-tab title="Character" active title-link-class="text-dark">
        <app-pack-list :type="'character'"></app-pack-list>
      </b-tab>
      <b-tab title="Linage" title-link-class="text-dark">
        <app-pack-list :type="'linage'"></app-pack-list>
      </b-tab>
      <b-tab title="Domain" title-link-class="text-dark">
        <app-pack-list :type="'domain'"></app-pack-list>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>

import appPackList from './PackList.vue';

export default {
  computed: {
    // selectedCharacters: {
    //   get() {
    //     return this.$store.state.packs.selectedCharacters;
    //   },
    //   set(value) {
    //     this.$store.commit('packs/setSelectedCharacters', value);
    //   },
    // },
    selectedLinages: {
      get() {
        const selected = this.$store.getters['packs/selectedPacksByType']('linage');
        return selected;
        // return this.$store.state.packs.selectedLinages;
      },
      set(value) {
        // this.$store.commit('packs/setSelectedLinages', value);
        const selected = this.$store.getters['packs/selectedPacksByType']('linage');
        if (JSON.stringify(selected) !== JSON.stringify(value)) {
          const data = { type: 'linage', packs: value };
          this.$store.dispatch('packs/setSelectedByType', data);
        }
      },
    },
    selectedDomains: {
      get() {
        return this.$store.state.packs.selectedDomains;
      },
      set(value) {
        this.$store.commit('packs/setSelectedDomains', value);
      },
    },
    characters() { return this.$store.state.packs.characters; },
    linages() { return this.$store.state.packs.linages; },
    domains() { return this.$store.state.packs.domains; },
  },
  data() {
    return {};
  },
  components: {
    appPackList,
  },
};
</script>
