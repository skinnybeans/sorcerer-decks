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
  },
  data() {
    return {};
  },
  components: {
    appPackList,
  },
};
</script>
