<template>
  <b-card
    header-bg-variant="light"
    header-text-variant="black"
    border-variant="dark"
    header-tag="header"
    class="my-3"
    >
    <template v-slot:header>
      <h6 class="mb-0 font-weight-bold">Deck {{ deck_number }}</h6>
    </template>
    <b-card-text>{{ deck.character }}</b-card-text>
    <b-card-text>{{ deck.lineage }}</b-card-text>
    <b-card-text>{{ deck.domain }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ['deck', 'deck_number'],
};
</script>
