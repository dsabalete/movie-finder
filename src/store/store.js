import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const apiKey = process.env.VUE_APP_OMDB_API_KEY

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchString: '',
    movies: [],
    error: '',
    selectedMovie: {}
  },
  getters: {
    searchString: state => {
      return state.searchString
    },
    movies: state => {
      return state.movies
    },
    error: state => {
      return state.error
    },
    details: state => {
      return state.selectedMovie
    }
  },
  mutations: {
    setSearchString: (state, str) => {
      state.searchString = str
    },
    setError: (state, err) => {
      state.error = err
    },
    setMovies: (state, movies) => {
      state.movies = movies
    },
    setSelectedMovie: (state, movie) => {
      state.selectedMovie = movie
    },
    reset: (state) => {
      state.selectedMovie = {}
      state.searchString = ''
      state.error = ''
      state.movies = []
    }
  },
  actions: {
    doSearch: ({ commit }, payload) => {
      axios.get(`?apiKey=${apiKey}&s=${payload.text}`)
        .then(res => {
          const {Response, Search, Error} = res.data
          if (Response === 'True') {
            commit('setMovies', Search)
          } else {
            commit('setError', Error)
          }
        })
        .catch(error => console.log(error))
      commit('setSearchString', '')
    },
    getDetails: ({ commit }, id) => {
      axios.get(`?apikey=${apiKey}&i=${id}`)
        .then(res => {
          commit('setSelectedMovie', res.data)
        })
        .catch(error => console.log(error))
    }
  }
})
