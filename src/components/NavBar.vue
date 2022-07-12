<template>
  <!-- sidenav content -->
  <ul class="sidenav" id="mobile-demo">
    <li><a href="#!">username</a></li>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider"></li>
    <li><a href="#!">three</a></li>
  </ul>
  <!-- dropdown content (identical to sidenav content) -->
  <ul id="dropdown1" class="dropdown-content">
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider"></li>
    <li><a href="#!">three</a></li>
  </ul>
  <!-- nav -->
  <nav class="z-depth-0 brown">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo hide-on-med-and-down"
        >Logo</router-link
      >
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >

      <ul class="right hide-on-med-and-down">
        <li>
          <a class="dropdown-trigger" href="#!" data-target="dropdown1"
            >username<i class="material-icons right">arrow_drop_down</i></a
          >
        </li>
      </ul>
      <a
        id="shoppingcart"
        class="btn-flat btn-large right waves-effect waves-dark"
        style="color: white; height: 100%"
        @click="shoppingCartBtn"
        ><i class="material-icons-outlined">shopping_cart</i></a
      >
      <!-- searchbox -->
      <div class="input-field" style="width: 60%; margin-left: 15%">
        <input class="rc" id="search" style="color: white" type="search" />
        <label class="label-icon" for="search"
          ><i class="material-icons">search</i></label
        >
        <i class="material-icons">close</i>
      </div>
    </div>
  </nav>
</template>

<script>
import M from "@materializecss/materialize";

export default {
  mounted() {
    M.AutoInit();
  },
  methods: {
    shoppingCartBtn() {
      this.$router.push("/shoppingcart");
    },
  },
};
</script>

<style>
.rc {
  border-radius: 10px !important;
}
#search:focus {
  position: absolute;
  color: black !important;
  height: 80%;
  margin: 5px 0px;
}
#shoppingcart:hover {
  background-color: #795548 !important;
}
</style>