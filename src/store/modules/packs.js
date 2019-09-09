const packs = {
  namespaced: true,
  state: {
    characters: ['Ariaspes', 'Tegu', 'Miselda'],
    domains: ['The Animist', 'The Demonologist', 'The Bloodlord'],
    linages: ['Of the Forgotten Temple', 'Of the Outcast Sanctuary'],
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
