<template>
  <div class="row">
    <div class="col-xs-6 text-center">
      <a :href="imdbLink" target="_blank"><img :src="details.Poster" ></a>
    </div>
    <div class="col-xs-6">
        <h3>{{ details.Title }}</h3>
        <hr>
        <p><strong>Director</strong>: {{ details.Director }}</p>
        <p><strong>Writer</strong>: {{ details.Writer }}</p>
        <p><strong>Actors</strong>: {{ details.Actors }}</p>
        <p><strong>Released</strong>: {{ details.Released }}</p>
        <p><strong>Genre</strong>: {{ details.Genre }}</p>
        <p v-if="details.Plot != 'N/A'"><strong>Plot</strong>: {{ details.Plot }}</p>
        <p><strong>Type</strong>: {{ details.Type }}</p>
        <p><strong>Runtime</strong>: {{ details.Runtime }}</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['id'],
  computed: {
    ...mapGetters([
      'details'
    ]),
    imdbLink: function () {
      return 'https://www.imdb.com/title/' + this.id
    }
  },
  methods: {
    ...mapActions([
      'getDetails'
    ])
  },
  created () {
    this.getDetails(this.id)
  }
}
</script>

<style scoped>
img {
  margin-bottom: 10px;
}
</style>
