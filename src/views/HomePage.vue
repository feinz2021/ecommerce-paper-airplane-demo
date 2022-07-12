<template>
  <div class="container">
    <div style="margin-top: 2%"></div>

    <!-- item list -->
    <div class="row">
      <div
        v-for="tes in paginationLimitDisplay"
        :key="tes"
        class="col s6 m4 l3"
      >
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
      <li :class="currentIndex === 0 ? disableNextPrev : enableNextPrev">
        <a @click="pagePrev()"><i class="material-icons">chevron_left</i></a>
      </li>
      <span v-for="(num, index) in paginationNumber" :key="num">
        <li
          :class="
            currentIndex === index + 1
              ? paginationActiveNum
              : paginationInactiveNum
          "
        >
          <a @click="pageNum(index)"> {{ index + 1 }}</a>
        </li>
      </span>
      <li
        :class="currentIndex === test.length ? disableNextPrev : enableNextPrev"
      >
        <a @click="pageNext()"><i class="material-icons">chevron_right</i></a>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      currentListPosition: 0, // position list in array for pagination
      currentIndex: 1, // for pagination navigation numbering
      //   user: "",
      test: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21,
      ],
      paginationActiveNum: "active brown lighten-1",
      paginationInactiveNum: "waves-effect",
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
    paginationLimitDisplay() {
      return this.test.slice(
        this.currentListPosition,
        10 + this.currentListPosition
      );
    },
    paginationNumber() {
      let arrayLength = this.test.length;
      let navNum = arrayLength / 10;
      if (navNum - Math.floor(navNum) !== 0) {
        return Math.trunc(navNum) + 1;
      } else {
        return navNum;
      }
    },
  },
  methods: {
    gotoProductDetails(id) {
      sessionStorage.setItem("productId", id);
      this.$router.push("/productdetails");
    },
    pagePrev() {},
    pageNum(currentPosition) {
      this.currentListPosition = currentPosition * 10;
      this.currentIndex = currentPosition + 1;
    },
    pageNext() {},
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
