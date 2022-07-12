<template>
  <div class="container">
    <div style="margin-top: 2%"></div>

    <!-- item list -->
    <div class="row">
      <div v-for="tes in test" :key="tes" class="col s6 m4 l3">
        <div
          class="card-panel z-depth-0 brown lighten-5 rc fp"
          style="height: 300px"
          @click="gotoProductDetails(tes)"
        >
          {{ tes }}
        </div>
      </div>
    </div>

    <!-- pagination -->
    <ul class="pagination center">
      <li :class="currentPage === 1 ? disableNextPrev : enableNextPrev">
        <a href="#!"><i class="material-icons">chevron_left</i></a>
      </li>
      <span v-for="(num, index) in test" :key="num">
        <li
          :class="
            activePage === false ? paginationInactivePage : paginationActivePage
          "
        >
          <a href="#!"> {{ index + 1 }}</a>
        </li>
      </span>
      <li
        :class="currentPage === test.length ? disableNextPrev : enableNextPrev"
      >
        <a href="#!"><i class="material-icons">chevron_right</i></a>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      activePage: true,
      currentPage: 1,
      //   user: "",
      test: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21,
      ],
      paginationActivePage: "active brown lighten-1",
      paginationInactivePage: "waves-effect",
      disableNextPrev: "disabled",
      enableNextPrev: "waves-effect",
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
  methods: {
    gotoProductDetails(id) {
      sessionStorage.setItem("productId", id);
      this.$router.push("/productdetails");
    },
    clickCallback(pageNum) {
      console.log(pageNum);
    },
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
</style>
