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
</template>

<script>

// import appPackList from './PackList.vue';

export default {
  computed: {
    selectedCharacters: {
      get() {
        return this.$store.state.packs.selectedCharacters;
      },
      set(value) {
        this.$store.commit('packs/setSelectedCharacters', value);
      },
    },
    selectedLinages: {
      get() {
        return this.$store.state.packs.selectedLinages;
      },
      set(value) {
        this.$store.commit('packs/setSelectedLinages', value);
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
  },
};
</script>
