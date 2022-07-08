<template>
  product details
  <h5>{{ productId }}</h5>
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
</style>