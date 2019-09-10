<template>
  <div>
    <b-form-group>
      <b-form-checkbox
        v-for="pack in packs"
        :key="pack"
        :id="pack"
        :value="pack"
        :name="`${type}_box`"
        class="my-1 dark"
        v-model="selectedPacks">
        {{ pack }}
      </b-form-checkbox>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: ['type'],
  computed: {
    selectedPacks: {
      get() {
        const selected = this.$store.getters['packs/selectedPacksByType'](this.type);
        return selected;
      },
      set(value) {
        // Every checkbox in the group sets a value even when only one was changed.
        // This was causing Vuex to be spammed with data updates and causing infinite loops to occur.
        // This prevents the value in the store from being updated if the value isn't different and cuts down the update spam.
        const selected = this.$store.getters['packs/selectedPacksByType'](this.type);
        if (JSON.stringify(selected) !== JSON.stringify(value)) {
          const data = { type: this.type, packs: value };
          this.$store.dispatch('packs/setSelectedByType', data);
        }
      },
    },
    packs() {
      return this.$store.getters['packs/packsByType'](this.type);
    },
  },
};
</script>
