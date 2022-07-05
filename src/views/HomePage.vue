<template>
  homepage
  <div class="container">
    <a class="btn z-depth-0 rc">button</a>
    <div class="card-panel z-depth-0 green rc">asd</div>

    <h5>testing UBUNTU {{ user }}</h5>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      //   user: "",
    };
  },
  mounted() {
    this.$store.commit("user", "test user");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style>
.rc {
  border-radius: 10px !important;
}
</style>
