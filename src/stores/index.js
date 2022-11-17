import axios from "axios";
import { defineStore } from "pinia";
var _ = require("lodash");

export const bookStore = defineStore("main", {
  state: () => ({
    results: [],
    loading: false,
  }),
  getters: {
    books: (state) => state.results,
  },
  actions: {
    async searchBooks(title) {
      this.loading = true;
      try {
        let response = await axios.get("/search.json?q=" + title);
        if (response.status == 200) {
          let docs = response.data.docs;

          let topTen = _.chain(docs)
            .countBy("title")
            .entries()
            .orderBy(1, "desc")
            .take(10)
            .fromPairs()
            .value();
          let topTenBooks = Object.keys(topTen);

          this.results = topTenBooks;
          this.loading = false;
          return true;
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
        return false;
      }
    },
  },
});
