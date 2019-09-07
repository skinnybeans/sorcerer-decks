<template>
  <b-card
    header-bg-variant="primary"
    header-text-variant="white"
    border-variant="primary"
    header-tag="header"
    class="my-3"
    >
    <template v-slot:header>
      <h6 class="mb-0">Deck {{ deck_number }}</h6>
    </template>
    <b-card-text>{{ deck.character }}</b-card-text>
    <b-card-text>{{ deck.linage }}</b-card-text>
    <b-card-text>{{ deck.domain }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ['deck', 'deck_number'],
};
</script>
