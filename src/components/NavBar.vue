<template>
  <!-- Login Modal Structure -->
  <div id="loginmodal" class="modal rc">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
  <!-- sidenav content -->
  <ul class="sidenav" id="mobile-demo">
    <li><a href="#!">username</a></li>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider"></li>
    <li><a class="fcbrown modal-trigger" href="#loginmodal">Login</a></li>
  </ul>
  <!-- dropdown content (must be identical to sidenav content) -->
  <ul id="dropdown1" class="dropdown-content rc">
    <li><a class="fcbrown">aa</a></li>
    <li class="divider"></li>
    <li><a class="fcbrown">two</a></li>
    <li class="divider"></li>
    <li><a class="fcbrown modal-trigger" href="#loginmodal">Login</a></li>
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
        <input
          @focus="searchIconColorActive()"
          @blur="searchIconColorInactive()"
          class="rc"
          id="search"
          style="color: white"
          type="search"
        />
        <label class="label-icon" for="search"
          ><i
            class="material-icons"
            :class="
              isSearchActive === true ? searchIconActive : searchIconInactive
            "
            >search</i
          ></label
        >
      </div>
    </div>
  </nav>
</template>

<script>
import M from "@materializecss/materialize";

export default {
  data() {
    return {
      isSearchActive: false,
      searchIconActive: "searchiconactive",
      searchIconInactive: "searchiconinactive",
    };
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    shoppingCartBtn() {
      this.$router.push("/shoppingcart");
    },
    searchIconColorActive() {
      const elem = document.getElementById("search");
      if (elem === document.activeElement) {
        this.isSearchActive = true;
      }
    },
    searchIconColorInactive() {
      const elem = document.getElementById("search");
      if (elem !== document.activeElement) {
        this.isSearchActive = false;
      }
    },
  },
};
</script>

<style>
.rc {
  border-radius: 10px !important;
}
/* searchbox focus input typing */
#search:focus {
  position: absolute;
  color: #795548 !important;
  height: 80%;
  margin: 5px 0px;
}
#shoppingcart:hover {
  background-color: #795548 !important;
}
.searchiconinactive {
  color: white !important;
}
.searchiconactive {
  color: #795548 !important;
}
.fcbrown {
  color: #795548 !important;
}
</style>