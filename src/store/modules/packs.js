import * as deckData from '../../data/decks';

const packs = {
  namespaced: true,
  state: {
    characters: deckData.characterList,
    lineages: deckData.lineageList,
    domains: deckData.domainList,
    selectedCharacters: deckData.characterList,
    selectedLineages: deckData.lineageList,
    selectedDomains: deckData.domainList,
  },
  mutations: {
    setSelectedCharacters(state, data) {
      state.selectedCharacters = data.slice();
    },
    setSelectedLineages(state, data) {
      state.selectedLineages = data.slice();
    },
    setSelectedDomains(state, data) {
      state.selectedDomains = data.slice();
    },
  },
  actions: {
    setSelectedByType({ commit }, data) {
      switch (data.type) {
        case 'character':
          commit('setSelectedCharacters', (data.packs));
          break;
        case 'lineage':
          commit('setSelectedLineages', (data.packs));
          break;
        case 'domain':
          commit('setSelectedDomains', (data.packs));
          break;
        default:
      }
    },
  },
  getters: {
    selectedPacks: (state) => {
      const selectedPacks = {
        characters: state.selectedCharacters.slice(),
        lineages: state.selectedLineages.slice(),
        domains: state.selectedDomains.slice(),
      };
      return selectedPacks;
    },
    packsByType: (state) => (type) => {
      let data = [];
      switch (type) {
        case 'character':
          data = state.characters;
          break;
        case 'lineage':
          data = state.lineages;
          break;
        case 'domain':
          data = state.domains;
          break;
        default:
          data = [];
      }
      return data.slice();
    },
    selectedPacksByType: (state) => (type) => {
      let data = [];
      switch (type) {
        case 'character':
          data = state.selectedCharacters;
          break;
        case 'lineage':
          data = state.selectedLineages;
          break;
        case 'domain':
          data = state.selectedDomains;
          break;
        default:
          data = [];
      }
      return data.slice();
    },
  },
};

export { packs };
export { packs as default };
