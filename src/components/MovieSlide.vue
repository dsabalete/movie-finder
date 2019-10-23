<template>
    <div class="text-center">
      <router-link :to="imdbLink">
        <img :src="film.Poster" :alt="film.Title">
      </router-link>
      <h4>{{ film.Title }} ({{ film.Year }})</h4>
      <p>Director: {{ director }}</p>
    </div>
</template>

<script>
export default {
  props: ['film'],
  data () {
    return {
      apiKey: process.env.VUE_APP_OMDB_API_KEY,
      apiRoot: process.env.VUE_APP_API_ROOT,
      director: ''
    }
  },
  computed: {
    imdbLink: function () {
      return '/Details/' + this.film.imdbID
    }
  },
  methods: {
    goToImdb () {
      window.open(this.imdbLink, '_blank')
    }
  },
  created () {
    const url = `${this.apiRoot}?apikey=${this.apiKey}&i=${this.film.imdbID}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.director = data.Director
      })
  }
}
</script>

<style scoped>
img {
    cursor: pointer;
}
</style>
