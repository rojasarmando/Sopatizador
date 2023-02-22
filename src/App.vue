<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/base.css";

import Navbar from "./components/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue";
import Main from "./views/MainView.vue";
</script>

<template>
  <Navbar />
  <Main />
  <Footer />
</template>

<style scoped></style>
