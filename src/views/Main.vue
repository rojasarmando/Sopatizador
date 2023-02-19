<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";

import Step1 from "../components/Step1.vue";
import Step2 from "../components/Step2.vue";
</script>

<template>
  <Step1 :show="control" />
  <Step2 :show="!control" />
</template>

<script lang="ts">
export default {
  data() {
    return {
      control: true,
    };
  },
  methods: {
    getControlStep1(active: boolean) {
      this.control = active;
    },

    reset() {
      this.control = true;
    },
  },
  mounted() {
    this.reset();
  },
};
</script>
