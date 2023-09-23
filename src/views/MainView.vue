<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";

import Form from "../components/FormComponent.vue";

import Table from "../components/TableComponent.vue";
</script>

<template>
  <Form :show="control" @change-control="changeControl" />
  <Table ref="tableRef" :show="!control" :list="words" @back-form="backForm" />
</template>

<script lang="ts">
export default {
  data() {
    return {
      control: true,
      words: new Array(),
    };
  },

  methods: {
    changeControl(active: boolean, list: any) {
      this.control = active;
      this.words = list.words;
      let refs: any = this.$refs.tableRef;
      console.log(this.$refs.tableRef);
      refs.updateWords(this.words, list.row, list.col);
    },

    backForm() {
      this.reset();
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
