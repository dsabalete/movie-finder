<template>
  <div>
    <form>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search movies by title"
          id="search"
          v-model="searchString"
          @focus="onFocus">
        <span class="input-group-btn">
          <button class="btn btn-primary" @click="doSearch">Search</button>
        </span>
      </div>
    </form>
    <br>
    <transition :name="alertAnimation" mode="out-in">
      <carousel v-if="data"
        :navigationEnabled="true"
        :perPage="1">
        <slide v-for="(film, index) in data" :key="index" class="carousel-item">
          <app-movie-slide :film="film"/>
        </slide>
      </carousel>
    </transition>
    <transition :name="alertAnimation" mode="out-in">
      <div class="alert alert-info" v-if="error" key="info">{{ error }}</div>
    </transition>
  </div>
</template>

<script>
import MovieSlide from './MovieSlide.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  data () {
    return {
      searchString: '',
      apiKey: process.env.VUE_APP_OMDB_API_KEY,
      apiRoot: process.env.VUE_APP_API_ROOT,
      resource: {},
      data: null,
      error: '',
      alertAnimation: 'fade'
    }
  },
  methods: {
    onFocus () {
      this.searchString = ''
      this.error = ''
    },
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
    appMovieSlide: MovieSlide,
    Carousel,
    Slide
  }
}
</script>

<style scoped>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
