<template>
  <div class="container">
  <div class="row  justify-content-center">
  <div class="col-6  mt-4">
    <h2>Search Book title</h2>
    <Search />
  </div>
</div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Search,
  },
};
</script>

<style scoped></style>
