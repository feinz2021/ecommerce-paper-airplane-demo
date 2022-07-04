<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="mobileMenuOpen"
        @click="menuMobile()"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="mobileMenuOpen">
      <div class="navbar-start">
        <a class="navbar-item"> Home </a>

        <a class="navbar-item"> Documentation </a>

        <div class="navbar-item has-dropdown">
          <a class="navbar-link" @click="menuDropdown()"> More </a>

          <div class="navbar-dropdown" :style="mobileDropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: "",
      mobileDropdown: "",
    };
  },
  methods: {
    menuMobile() {
      if (this.mobileMenuOpen === "") {
        this.mobileMenuOpen = "is-active";
        this.mobileDropdown = "display: none";
      } else this.mobileMenuOpen = "";
    },
    menuDropdown() {
      if (this.mobileMenuOpen === "is-active") {
        if (this.mobileDropdown === "display: none")
          this.mobileDropdown = "display: block";
        else if (this.mobileDropdown === "")
          this.mobileDropdown = "display: block";
        else this.mobileDropdown = "display: none";
      } else {
        if (this.mobileDropdown === "display: none")
          this.mobileDropdown = "display: block";
        else if (this.mobileDropdown === "")
          this.mobileDropdown = "display: block";
        else this.mobileDropdown = "display: none";
      }
    },
  },
};
</script>

<style>
</style>