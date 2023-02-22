<script setup lang="ts">
import { Sopatizador } from "sopatizador";
</script>
<template>
  <div class="container mt-5" v-if="show">
    <div class="row align-items-center">
      <div class="col-10 offset-1">
        <div class="card">
          <h4 class="card-header">Paso 2: Resultados</h4>
          <div class="card-body">
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button class="btn btn-outline-danger me-md-2" type="button">
                <i class="bi bi-arrow-left"></i> Atras
              </button>
              <button class="btn btn-outline-success" type="button">
                Imprimir
                <i class="bi bi-printer"></i>
              </button>
              <button class="btn btn-outline-primary" type="button">
                Marcar Repuestas
                <i class="bi bi-check2-all"></i>
              </button>
            </div>

            <table class="table table-hover">
              <tbody>
                <tr v-for="r in row" :key="r">
                  <td v-for="c in col" :key="c">
                    {{ soup.getAlphabet_soup()[r - 1][c - 1].text }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    show: Boolean,
    list: Array<String>,
  },
  expose: ["updateWords"],
  data() {
    return {
      count: 0,
      words: new Array(),
      row: 0,
      col: 0,
      soup: new Sopatizador(),
    };
  },
  methods: {
    updateWords(list: Array<String>, row: number, col: number) {
      this.words = [];
      this.soup = new Sopatizador(row, col);
      this.row = row;
      this.col = col;
      list?.forEach((e) => {
        this.words.push(e);

        this.soup.addAlphabet_soup(e.toString());
      });
    },
  },
};
</script>
