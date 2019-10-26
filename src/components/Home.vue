<template>
  <div>
    <div class="row">
      <div class="col-xs-8 col-xs-offset-2 col-sm-10 col-sm-offset-1">
        <transition name="fade" mode="out-in">
          <carousel v-if="error == ''" :navigationEnabled="true" :perPage="1">
            <slide v-for="(movie, index) in movies" :key="index" class="carousel-item">
              <app-movie-slide :movie="movie"/>
            </slide>
          </carousel>
        </transition>
      </div>
    </div>
    <div class="row">
      <transition name="fade" mode="out-in">
        <div class="alert alert-info" v-if="error" key="info">{{ error }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
import MovieSlide from './MovieSlide.vue'
import { Carousel, Slide } from 'vue-carousel'
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'movies',
      'error'
    ])
  },
  methods: {
    ...mapMutations([
      'reset'
    ]),
    onFocus () {
      this.reset()
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

</style>
