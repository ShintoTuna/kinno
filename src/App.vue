<template>
  <div id="app">
    <MoviesList />
  </div>
</template>

<script>
import MoviesList from "./components/MoviesList.vue";

export default {
  name: "app",
  components: {
    MoviesList
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
