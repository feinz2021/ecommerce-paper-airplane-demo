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

    <!-- pagination number at bottom -->
    <ul class="pagination center">
      <li :class="currentIndex === 1 ? disableNextPrev : enableNextPrev">
        <a @click="pagePrev(currentIndex)"
          ><i class="material-icons">chevron_left</i></a
        >
      </li>
      <span v-for="num in paginationNumber" :key="num">
        <li
          :class="
            currentIndex === num ? paginationActiveNum : paginationInactiveNum
          "
        >
          <a @click="pageNum(num)"> {{ num }}</a>
        </li>
      </span>
      <li
        :class="
          currentIndex === paginationMaxNumber
            ? disableNextPrev
            : enableNextPrev
        "
      >
        <a @click="pageNext(currentIndex)"
          ><i class="material-icons">chevron_right</i></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      currentListPosition: 0, // position list in array for data pagination
      currentIndex: 1, // for pagination navigation numbering

      test: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
        123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136,
        137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
        151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164,
        165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
        179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192,
        193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206,
        207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
        221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
        235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248,
        249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262,
        263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276,
        277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290,
        291, 292, 293, 294, 295, 296, 297, 298, 299,
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
      let arr = [];
      let arrayLength = this.test.length;
      let navNum = arrayLength / 10;
      if (navNum - Math.floor(navNum) !== 0) {
        let num = Math.trunc(navNum) + 1;
        for (let i = 1; i <= num; i++) {
          arr[i] = i;
        }
        if (this.currentIndex < 5) {
          return arr.slice(1, 11);
        } else if (this.currentIndex >= num - 4 && this.currentIndex <= num) {
          return arr.slice(num - 9, 1 + num);
        } else {
          return arr.slice(this.currentIndex - 4, 6 + this.currentIndex);
        }
      } else {
        for (let i = 1; i <= navNum; i++) {
          arr[i] = i;
        }
        if (this.currentIndex < 5) {
          return arr.slice(1, 11);
        } else if (
          this.currentIndex >= navNum - 4 &&
          this.currentIndex <= navNum
        ) {
          return arr.slice(navNum - 9, 1 + navNum);
        } else {
          return arr.slice(this.currentIndex - 4, 6 + this.currentIndex);
        }
      }
    },
    paginationMaxNumber() {
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
    pagePrev(i) {
      if (this.currentIndex !== 1) {
        this.currentListPosition = this.currentListPosition - 10;
        this.currentIndex = i - 1;
      }
    },
    pageNum(currentPosition) {
      this.currentListPosition = (currentPosition - 1) * 10;
      this.currentIndex = currentPosition;
    },
    pageNext(i) {
      if (this.currentIndex !== this.paginationMaxNumber) {
        this.currentListPosition = this.currentListPosition + 10;
        this.currentIndex = i + 1;
      }
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
