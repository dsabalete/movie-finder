<template>
  <div class="row">
    <div class="col-xs-6">
      <img :src="details.Poster">
    </div>
    <div class="col-xs-6 right">
      <p>Title: {{ details.Title }}</p>
      <p>Director: {{ details.Director }}</p>
      <p>Writer: {{ details.Writer }}</p>
      <p>Actors: {{ details.Actors }}</p>
      <p>Genre: {{ details.Genre }}</p>
      <p>Year: {{ details.Year }}</p>
      <p v-if="details.Plot != 'N/A'">Plot: {{ details.Plot }}</p>
      <p>Type: {{ details.Type }}</p>
      <p>Runtime: {{ details.Runtime }}</p>
      <p>Released: {{ details.Released }}</p>
      <p><a :href="imdbLink" target="_blank">more info</a></p>
      <router-link to="/">Return to homepage</router-link>
    </div>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
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
  created () {
    const url = `${this.apiRoot}?apikey=${this.apiKey}&i=${this.id}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.details = data
      })
  }
}
</script>
