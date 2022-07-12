<template>
  <div class="container">
    <div style="margin-top: 2%"></div>
    <!-- horizontal card, large screen -->
    <div class="card horizontal z-depth-0 hide-on-med-and-down">
      <div class="card-image">
        <img class="rc" src="@/assets/imgplaceholder.jpg" />
      </div>
      <div class="card-stacked brown lighten-5 rc">
        <div class="card-content">
          <p>
            product details <br />
            {{ productId }}
          </p>
        </div>
        <div class="card-action brown lighten-5 rc">
          <div class="center">
            <a
              @click="$router.go(-1)"
              id="backBtn"
              class="btn btn-flat waves-effect wave-dark rc fp"
              style="color: #795548; width: 100%; height: 100%"
              >Back<i class="material-icons-round right">arrow_back_ios</i></a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- vertical card, mobile -->
    <div class="card z-depth-0 hide-on-large-only">
      <div class="card-image">
        <img class="rc" src="@/assets/imgplaceholder.jpg" />
      </div>
      <div class="card-content brown lighten-5 rc">
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
      </div>
      <div class="card-action brown lighten-5 rc">
        <div class="center">
          <a
            @click="$router.go(-1)"
            id="backBtn"
            class="btn btn-flat waves-effect wave-dark rc fp"
            style="color: #795548; width: 100%; height: 100%"
            >Back<i class="material-icons-round right">arrow_back_ios</i></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: "",
    };
  },
  mounted() {
    this.productId = sessionStorage.getItem("productId");
  },
};
</script>

<style>
.rc {
  border-radius: 10px !important;
}
.fp {
  cursor: pointer;
}
#backBtn:hover {
  background-color: transparent !important;
}
</style>