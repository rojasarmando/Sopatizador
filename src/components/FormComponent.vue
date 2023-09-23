<script setup lang="ts">
import { isLetter, isNumber } from "../utils/InputUtils";
</script>
<template>
  <div class="container mt-5" v-if="show">
    <div class="row align-items-center">
      <div class="col-6 offset-3">
        <div class="card">
          <h4 class="card-header">Paso 1: Configuracion</h4>
          <div class="card-body">
            <h5 class="card-title mt-3">Configurar celdas</h5>
            <div class="row">
              <div class="col-3">
                <label for="inputPassword6" class="col-form-label"
                  >No. de columnas</label
                >
              </div>
              <div class="col-auto">
                <input
                  type="number"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  v-model="dataForm.col"
                  v-on:keypress="isNumber($event)"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <label for="inputPassword6" class="col-form-label"
                  >No. de filas</label
                >
              </div>
              <div class="col-auto">
                <input
                  type="number"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  v-model="dataForm.row"
                  v-on:keypress="isNumber($event)"
                />
              </div>
            </div>

            <h5 class="card-title mt-3">Palabra a registrar</h5>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Minimo 4 caracteres"
                aria-describedby="button-addon2"
                v-model="newWord"
                v-on:keypress="isLetter($event)"
                v-uppercase
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                v-on:click="addWord()"
              >
                Agregar
              </button>
            </div>

            <h5 class="card-title mt-3">Listado de palabras</h5>

            <ol class="list-group list-group-numbered mb-3">
              <li
                class="list-group-item"
                v-for="(word, index) in dataForm.words"
                :key="word"
              >
                {{ word }}
                <button
                  class="btn btn-sm btn-outline-danger ml-5"
                  v-on:click="deleteWord(index)"
                  style="margin-left: 10px"
                >
                  Eliminar
                </button>
              </li>
            </ol>

            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button
                v-on:click="clear()"
                class="btn btn-outline-danger me-md-2"
                type="button"
              >
                Limpiar <i class="bi bi-eraser-fill"></i>
              </button>
              <button
                v-on:click="submit()"
                class="btn btn-outline-primary me-md-2"
                type="button"
              >
                Generar <i class="bi bi-arrow-right"></i>
              </button>
            </div>
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
  },
  data() {
    return {
      dataForm: {
        row: 12,
        col: 12,
        words: new Array(),
      },
      newWord: "",
    };
  },
  methods: {
    addWord() {
      if (!this.newWord) return;
      if (this.newWord.length < 4) return;
      this.dataForm.words.push(this.newWord.toUpperCase());
      this.newWord = "";
    },

    clear() {
      this.dataForm = {
        row: 12,
        col: 12,
        words: [],
      };
      this.newWord = "";
    },

    deleteWord(indice: number) {
      let copy: Array<String> = [...this.dataForm.words];

      this.dataForm.words = [];

      copy.forEach((element, i) => {
        if (i != indice) this.dataForm.words.push(element);
      });
    },

    submit() {
      this.$emit("changeControl", false, this.dataForm);
    },
  },
};
</script>
