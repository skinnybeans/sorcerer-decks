const packs = {
  state: {
    characterPacks: ['Ariaspes', 'Tegu', 'Miselda'],
    domainPacks: ['The Animist', 'The Demonologist', 'The Bloodlord'],
    linagePacks: ['Of the Forgotten Temple', 'Of the Outcast Sanctuary'],
    selectedCharacterPacks: ['Ariaspes', 'Tegu', 'Miselda'],
    selectedDomainPacks: ['The Animist', 'The Demonologist', 'The Bloodlord'],
    selectedLinagePacks: ['Of the Forgotten Temple', 'Of the Outcast Sanctuary'],
  },
  mutations: {
    setSelectedCharacters(state, data) {
      state.characterPacks = data;
    },
    setSelectedDomains(state, data) {
      state.domainPacks = data;
    },
    setSelectedLinages(state, data) {
      state.linagePacks = data;
    },
  },
  actions: { },
  getters: { },
};

export { packs };
export { packs as default };
