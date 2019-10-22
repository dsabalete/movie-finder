<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>MovieFinder</h1>
<!-- MovieFinder is a search engine for movies.
    It should have at least a homepage and a results page.
    The homepage should contain a search box.
    The search box should allow the user to search for movies by Title.
    The results page should display the found movies in a slider.
    Every movie slide should contain the movie Title, Poster, Director and Year.

You can use The Open Movie Database's API (https://www.omdbapi.com/) to fetch information about movies. -->
                <hr>
                <!-- <app-header></app-header> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
