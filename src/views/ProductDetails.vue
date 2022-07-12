<template>
  product details
  <h5>{{ productId }}</h5>
  <div class="container">
    <!-- horizontal card, large screen -->
    <div class="card horizontal z-depth-0 hide-on-med-and-down">
      <div class="card-image">
        <img class="rc" src="@/assets/imgplaceholder.jpg" />
      </div>
      <div class="card-stacked brown lighten-5 rc">
        <div class="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of
            information.
          </p>
        </div>
        <div class="card-action brown lighten-5 rc">
          <a href="#">This is a link</a>
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
        <a href="#">This is a link</a>
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
</style>