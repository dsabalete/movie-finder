<template>
  <div class="row">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">Movie Finder</router-link>
        </div>
        <form class="navbar-form navbar-left" v-if="showForm">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search movies by title"
              :value="searchString"
              @input="inputChanged"
              @focus="onFocus">
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="doSearch({ text: searchString })">Search</button>
        </form>
        <form class="navbar-form navbar-right" v-else>
          <router-link tag="button" class="btn btn-primary" to="/">New Search</router-link>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      showForm: true
    }
  },
  computed: {
    ...mapGetters([
      'searchString'
    ])
  },
  watch: {
    $route (to, from) {
      this.showForm = this.$route.path === '/'
    }
  },
  methods: {
    ...mapMutations([
      'reset',
      'setSearchString'
    ]),
    ...mapActions([
      'doSearch'
    ]),
    inputChanged (event) {
      this.setSearchString(event.target.value)
    },
    onFocus () {
      this.reset()
    }
  }
}
</script>

<style scoped>
nav {
  margin-top: 30px;
}
</style>
