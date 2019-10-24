<template>
  <div class="text-center">
    <a :href="imdbLink" target="_blank"><img :src="details.Poster" ></a>
    <div class="movie-details">
      <p>Title: {{ details.Title }}</p>
      <p>Director: {{ details.Director }} - Writer: {{ details.Writer }}</p>
      <p>Actors: {{ details.Actors }}</p>
      <p>Released: {{ details.Released }}</p>
      <p>Genre: {{ details.Genre }}</p>
      <p v-if="details.Plot != 'N/A'">Plot: {{ details.Plot }}</p>
      <p>Type: {{ details.Type }}</p>
      <p>Runtime: {{ details.Runtime }}</p>
    </div>
    <div class="go-home">
      <button class="btn btn-primary" @click="navigateToHome">New search</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      apiKey: process.env.VUE_APP_OMDB_API_KEY,
      apiRoot: process.env.VUE_APP_API_ROOT,
      details: null
    }
  },
  computed: {
    imdbLink: function () {
      return 'https://www.imdb.com/title/' + this.id
    }
  },
  methods: {
    navigateToHome () {
      this.$router.push('/')
    }
  },
  created () {
    const url = `${this.apiRoot}?apikey=${this.apiKey}&i=${this.id}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.details = data
      })
  }
}
</script>

<style scoped>
img {
  margin-bottom: 10px;
}
.movie-details {
  background-color: white;
  padding: 10px;
  text-align: left;
}
.go-home {
  margin: 10px;
  text-align: center;
}
</style>
