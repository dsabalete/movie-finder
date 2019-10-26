<template>
    <div class="text-center" @click="navigateToDetails">
      <img :src="movie.Poster" :alt="movie.Title">
      <h4>{{ movie.Title }} <small>({{ movie.Year }})</small></h4>
      <p>Director: {{ director }}</p>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  props: ['movie'],
  data () {
    return {
      director: '',
      apiKey: process.env.VUE_APP_OMDB_API_KEY
    }
  },
  computed: {
    imdbLink: function () {
      return '/details/' + this.movie.imdbID
    }
  },
  methods: {
    ...mapActions([
      'getDirector'
    ]),
    navigateToDetails () {
      this.$router.push(this.imdbLink)
    }
  },
  created () {
    axios.get(`?apikey=${this.apiKey}&i=${this.movie.imdbID}`)
      .then(res => {
        this.director = res.data.Director
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
img {
    cursor: pointer;
}
</style>
