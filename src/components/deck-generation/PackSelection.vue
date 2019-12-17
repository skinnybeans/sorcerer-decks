<template>
  <b-card no-body>
    <b-tabs
      card
      pills
      v-model="tabIndex"
      class="dark">
      <b-tab title="Character" active :title-link-class="linkClass(0)">
        <app-pack-list :type="'character'"></app-pack-list>
      </b-tab>
      <b-tab title="Lineage" :title-link-class="linkClass(1)">
        <app-pack-list :type="'lineage'"></app-pack-list>
      </b-tab>
      <b-tab title="Domain" :title-link-class="linkClass(2)">
        <app-pack-list :type="'domain'"></app-pack-list>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>

import appPackList from './PackList.vue';

export default {
  computed: {
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-secondary', 'text-light'];
      }

      return ['bg-light', 'text-secondary'];
    },
  },
  components: {
    appPackList,
  },
};
</script>
