<template>
  <NavBar />
  <body>
    <main>
      <router-view />
    </main>
  </body>
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
  display: flex !important;
  min-height: 100vh !important;
  flex-direction: column !important;
}
#app {
  font-family: "Ubuntu", sans-serif;
}

main {
  flex: 1 0 auto !important;
}
</style>
