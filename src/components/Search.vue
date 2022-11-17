<template>
  <div class="input-group input-group-lg">
    <input
      v-model="title"
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-lg"
      placeholder="Search Book title"
    />
    <button class="input-group-text btn btn-primary" id="inputGroup-sizing-lg" @click="search"
      >Search</button>
  </div>
  <div class="row mt-4">
    <font-awesome-icon icon="fa-solid fa-spinner" spin v-if="loading" />
  </div>
</template>

<script>
import { bookStore } from "@/stores/index.js";
import { mapActions, mapState } from "pinia";

export default {
  name: "Search",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapState(bookStore, ["loading"]),
  },
  methods: {
    ...mapActions(bookStore, ["searchBooks"]),
    async search() {
      let response = await this.searchBooks(this.title);

      if (response) {
        this.$router.push("/results");
      } else {
        alert("Someting went wrong!");
      }
    },
  },
};
</script>
