<template>
  <div class="container">
    <div style="margin-top: 2%"></div>
    <div class="row">
      <div v-for="tes in test" :key="tes" class="col s6 m4 l3">
        <div
          class="card-panel z-depth-0 blue rc"
          style="color: white; height: 300px"
          @click="gotoProductDetails(tes)"
        >
          {{ tes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      //   user: "",
      test: [1, 2, 3, 4, 5, 6],
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
  methods:{
    gotoProductDetails(id){
      sessionStorage.setItem("productId", id);
      this.$router.push("/productdetails");
    }
  }
};
</script>
<style>
.rc {
  border-radius: 10px !important;
}
</style>
