import * as deckData from '../../data/decks';

const packs = {
  namespaced: true,
  state: {
    characters: deckData.characterList,
    linages: deckData.linageList,
    domains: deckData.domainList,
    selectedCharacters: deckData.characterList,
    selectedLinages: deckData.linageList,
    selectedDomains: deckData.domainList,
  },
  mutations: {
    setSelectedCharacters(state, data) {
      state.selectedCharacters = data.slice();
    },
    setSelectedLinages(state, data) {
      state.selectedLinages = data.slice();
    },
    setSelectedDomains(state, data) {
      state.selectedDomains = data.slice();
    },
  },
  actions: {
    setSelectedByType({ commit }, data) {
      console.log(data);
      switch (data.type) {
        case 'character':
          commit('setSelectedCharacters', (data.packs));
          break;
        case 'linage':
          commit('setSelectedLinages', (data.packs));
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
        linages: state.selectedLinages.slice(),
        domains: state.selectedDomains.slice(),
      };
      return selectedPacks;
    },
    packsByType: state => (type) => {
      let data = [];
      switch (type) {
        case 'character':
          data = state.characters;
          break;
        case 'linage':
          data = state.linages;
          break;
        case 'domain':
          data = state.domains;
          break;
        default:
          data = [];
      }
      return data.slice();
    },
    selectedPacksByType: state => (type) => {
      let data = [];
      switch (type) {
        case 'character':
          data = state.selectedCharacters;
          break;
        case 'linage':
          data = state.selectedLinages;
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
