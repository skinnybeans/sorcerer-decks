<template>
  <div>
    <b-row class="mt-3">
      <b-col>
        <h1>Card List</h1>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <b-form-group>
          <input type="text" placeholder="Type to search" v-model="filter" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-table
      striped
      hover
      :sticky-header="'70vh'"
      :head-variant="'dark'"
      :fields="fields"
      :items="items"
      :filter="filter"
      :filterIncludedFields="filterFields"
    >
      <template v-slot:cell(CardBack)="data">{{ data.value.replace(' Back', '') }}</template>
    </b-table>
  </div>
</template>

<script>
import { cards } from '../../data/cards';

export default {
  data() {
    return {
      items: cards,
      fields: [
        {
          key: 'DeckName',
          label: 'Name',
        },
        {
          key: 'CardName',
          label: 'Card',
        },
        {
          key: 'Qty',
          label: 'Qty',
        },
        {
          key: 'DeckType',
          label: 'Deck Type',
        },
        {
          key: 'CardBack',
          label: 'Card Type',
        },
      ],
      filter: '',
      filterFields: [],
    };
  },
};
</script>
