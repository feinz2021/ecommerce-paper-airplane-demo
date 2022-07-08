<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
@font-face {
  font-family: "Ubuntu";
  src: local("Ubuntu"),
    url(./fonts/Ubuntu/Ubuntu-Regular.ttf) format("truetype");
}
html,
body {
  font-family: "Ubuntu", sans-serif;
}
#app {
  font-family: "Ubuntu", sans-serif;
}
</style>
