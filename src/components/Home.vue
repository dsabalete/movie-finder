<template>
  <div>
    <form>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search movies by title"
          id="search"
          v-model="searchString"
          @change="error = ''">
        <span class="input-group-btn">
          <button class="btn btn-primary" @click="doSearch">Search</button>
        </span>
      </div>
    </form>
    <br>
    <carousel v-if="data"
      :navigationEnabled="true"
      :perPage="1">
      <slide v-for="(film, index) in data" :key="index" class="carousel-item">
        <app-movie :film="film"/>
      </slide>
    </carousel>
    <div class="alert alert-info" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import Movie from './Movie.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  data () {
    return {
      searchString: '',
      apiKey: process.env.VUE_APP_OMDB_API_KEY,
      apiRoot: process.env.VUE_APP_API_ROOT,
      resource: {},
      data: null,
      error: ''
    }
  },
  methods: {
    doSearch () {
      this.data = null
      fetch(`${this.apiRoot}?apikey=${this.apiKey}&s=${this.searchString}`)
        .then(response => response.json())
        .then(data => {
          if (data.Error) {
            this.error = data.Error
          } else {
            this.data = data.Search
          }
        })
    }
  },
  components: {
    appMovie: Movie,
    Carousel,
    Slide
  }
}
</script>
