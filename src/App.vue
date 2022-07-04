<template>
  <NavBar />
  <router-view />
  <FooterPage />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: { NavBar, FooterPage },
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
