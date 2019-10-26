import axios from 'axios'

const state = {
  searchString: '',
  error: '',
  movies: []
}

const mutations = {
  'SET_SEARCH_STRING' (state, text) {
    state.searchString = text
  },
  'SET_ERROR' (state, error) {
    state.error = error
  },
  'SET_MOVIES' (state, movies) {
    state.movies = movies
  }
}

const actions = {
  searchMovies ({ commit }, text) {
    axios.get(`?apiKey=${process.env.VUE_APP_OMDB_API_KEY}&s=${text}`)
      .then(res => {
        const {Response, Search, Error} = res.data
        if (Response === 'True') {
          commit('SET_MOVIES', Search)
        } else {
          commit('SET_ERROR', Error)
        }
      })
      .catch(error => console.log(error))
  }
}

const getters = {
  searchString (state) {
    return state.searchString
  },
  getMovies (state) {
    return state.movies
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
