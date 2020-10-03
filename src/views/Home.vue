<template>
  <div id="home">
    <Navbar />
    <!-- Wallpaper -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- C0ntent -->
    <HomeContent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import "../assets/style/Home.css";
import HomeContent from "@/components/HomeContent.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    HomeContent,
    Navbar
  }
};
</script>
