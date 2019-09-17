<template>
    <b-navbar toggleable="sm" variant="dark" type="dark" fixed="top" :sticky="true">
      <b-navbar-brand class="d-flex align-items-center justify-content-center flex-wrap">
        <div>
          <img style="width: 200px" src="../assets/sorcerer.png" alt="">
        </div>
        <div>
          <h2 class="d-inline-block mb-0 col-12 col-md-6">
            Decks
          </h2>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-link
            to="/deckgeneration"
            class="my-auto p-2 rounded text-decoration-none text-white-50"
            active-class="bg-secondary"
            >
            Decks
          </b-link>
          <b-link
            to="/cardlist"
            class="my-auto p-2 rounded text-decoration-none text-white-50"
            active-class="bg-secondary"
            >
            Cards
          </b-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  methods: {
    navigate(path) {
      this.$router.push(path);
      console.log(this.$route);
    },
  },
};
</script>
