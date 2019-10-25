<template>
    <div class="text-center" @click="navigateToDetails">
      <img :src="film.Poster" :alt="film.Title">
      <h4>{{ film.Title }} <small>({{ film.Year }})</small></h4>
      <p>Director: {{ director }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['film'],
  data () {
    return {
      apiKey: process.env.VUE_APP_OMDB_API_KEY,
      director: ''
    }
  },
  computed: {
    imdbLink: function () {
      return '/Details/' + this.film.imdbID
    }
  },
  methods: {
    navigateToDetails () {
      this.$router.push(this.imdbLink)
    }
  },
  created () {
    axios.get(`?apiKey=${this.apiKey}&i=${this.film.imdbID}`)
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
