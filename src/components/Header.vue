<template>
    <b-navbar toggleable="sm" variant="dark" type="dark" fixed="top" :sticky="true">
      <b-navbar-brand
        class="d-flex align-items-center justify-content-center flex-wrap"
        to="/"
        >
        <div>
          <img style="width: 200px" src="../assets/sorcerer.png" alt="">
        </div>
        <div>
          <h2 class="d-inline-block mb-0 pl-0 col-12 col-md-6 text-white-50">
            Decks
          </h2>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-link
            to="/deckgeneration"
            class="my-auto py-2 px-3 mx-3 rounded text-decoration-none text-white-50"
            active-class="bg-secondary"
            >
            Decks
          </b-link>
          <b-link
            to="/cardlist"
            class="my-auto py-2 px-3 mx-3 rounded text-decoration-none text-white-50"
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
};
</script>
