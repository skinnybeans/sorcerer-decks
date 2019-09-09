import * as deckData from '../../data/decks';

const packs = {
  namespaced: true,
  state: {
    characters: deckData.characterList,
    linages: deckData.linageList,
    domains: deckData.domainList,
    selectedCharacters: ['Ariaspes', 'Tegu', 'Miselda'],
    selectedLinages: ['The Animist', 'The Demonologist', 'The Bloodlord'],
    selectedDomains: ['Of the Forgotten Temple', 'Of the Outcast Sanctuary'],
  },
  mutations: {
    setSelectedCharacters(state, data) {
      state.selectedCharacters = data;
    },
    setSelectedLinages(state, data) {
      state.selectedLinages = data;
    },
    setSelectedDomains(state, data) {
      state.selectedDomains = data;
    },
  },
  actions: { },
  getters: {
    selectedPacks: (state) => {
      const selectedPacks = {
        characters: state.selectedCharacters.slice(),
        linages: state.selectedLinages.slice(),
        domains: state.selectedDomains.slice(),
      };
      return selectedPacks;
    },
  },
};

export { packs };
export { packs as default };
