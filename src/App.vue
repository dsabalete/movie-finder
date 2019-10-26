<template>
  <div class="container">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
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
