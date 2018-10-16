import Vue from 'vue';
import Vuex from 'vuex';
import data from '../data/movies';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    updateMoviesData(state, moviesData) {
      console.log('updated movies');
      state.movies = moviesData;
    },
  },
  actions: {
    loadMovieData({ commit }) {
      commit('updateMoviesData', data);
    },
  },
});
