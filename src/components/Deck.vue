<template>
  <b-card
    header-bg-variant="dark"
    header-text-variant="white"
    border-variant="dark"
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
