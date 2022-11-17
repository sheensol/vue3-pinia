<template>
   <div class="container">
  <div class="row  justify-content-center"  v-if="!loading">
  <div class="col-6  mt-4">
    <h3>Search Results</h3>
   
  <ul class="list-group" style="text-align:left">
        <li class="list-group-item"  v-for="(book,i) in books"
        :key="book.title" ><h5>{{i+1}} - {{ book }}</h5></li> 
    </ul>

    </div>
  </div>
</div>
</template>

<script>
import { mapState } from "pinia";
import { bookStore } from "@/stores/index.js"; 

export default {
  name: "Results",
  computed: {
    ...mapState(bookStore, ["books", "loading"]),
  },
   
};
</script>
