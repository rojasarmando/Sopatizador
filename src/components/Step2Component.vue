<template>
  <div class="container mt-5" v-if="show">
    <div class="row align-items-center">
      <div class="col-10 offset-1">
        <div class="card">
          <h4 class="card-header">Paso 2: Resultados</h4>
          <div class="card-body">
            <form>
              <h5 class="card-title mt-3">Configurar celdas</h5>
              <div class="row">
                <div class="col-3">
                  <label for="inputPassword6" class="col-form-label"
                    >No. de columnas</label
                  >
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                    v-model="dataForm.col"
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
                    type="text"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                    v-model="dataForm.row"
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
            </form>

            <a href="#" class="btn btn-primary mb-3">Generar</a>

            <h5 class="card-title mt-3">Listado de palabras</h5>

            <ol class="list-group list-group-numbered mb-3">
              <li
                class="list-group-item"
                v-for="(word, index) in dataForm.words"
                :key="word"
              >
                {{ word }}
              </li>
            </ol>
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
      count: 0,
      dataForm: {
        row: 12,
        col: 12,
        words: [],
      },
      newWord: "",
    };
  },
  methods: {
    increment() {
      this.count++;
    },

    addWord() {
      if (this.newWord) {
        this.dataForm.words.push(this.newWord);
        this.newWord = "";
      }
    },
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment();
  },
};
</script>
