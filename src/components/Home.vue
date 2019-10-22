<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Enter movie title"
        v-model="searchString">
      <span class="input-group-btn">
        <button class="btn btn-primary" @click="doSearch">Search</button>
      </span>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      searchString: '',
      apiKey: '24bedb4e'
    }
  },
  methods: {
    doSearch () {
      console.log('doSearch', this.searchString)
    }
  }
}
</script>
