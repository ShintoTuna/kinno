<template>
<div>
    <h1>{{msg}}</h1>
    <div>
        <h1>Venom1</h1>
    </div>
    <div>
        <h1>Home</h1>
    </div>
</div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({ load: "loadMovieData" })
  },
  data: () => ({
    msg: "msg hello"
  }),
  created() {
    this.load();
  }
};
</script>
