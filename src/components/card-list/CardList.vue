<template>
  <div>
    <b-row class="mt-3">
      <b-col>
        <b-form-group>
          <input type="text" placeholder="Type to search" v-model="filter">
        </b-form-group>
      </b-col>
    </b-row>
    <b-table
      striped hover
      :items="items"
      :filter="filter"
      :filterIncludedFields="filterFields"></b-table>
  </div>
</template>

<script>
import { cards } from '../../data/cards';

export default {
  data() {
    return {
      items: cards,
      filter: '',
      filterFields: [],
    };
  },
};
</script>
