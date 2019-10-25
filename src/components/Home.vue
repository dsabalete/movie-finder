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
import axios from 'axios'
import MovieSlide from './MovieSlide.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  data () {
    return {
      apiKey: process.env.VUE_APP_OMDB_API_KEY,
      data: null,
      error: '',
      searchString: '',
      alertAnimation: 'fade'
    }
  },
  // computed: {
  //   searchString () {
  //     return this.$store.state.searchString
  //   }
  // },
  methods: {
    onFocus () {
      this.$store.state.searchString = ''
      this.error = ''
    },
    doSearch () {
      this.data = null
      axios.get(`?apiKey=${this.apiKey}&s=${this.searchString}`)
        .then(res => {
          const {Response, Search, Error} = res.data
          if (Response === 'True') {
            this.data = Search
          } else {
            this.error = Error
          }
        })
        .catch(error => console.log(error))
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
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
