<template>
	<div id="app">
		<app-banner v-bind:title="title"/>
		<div class="container">
			<div class="row">
				<div class="col-sm-4" v-for="movie in movies" :key="movie.id">
					<movie-card v-bind:movie="movie"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import movieApi from './API/movies'

	import HelloWorld from './components/HelloWorld.vue'
	import AppBanner from './components/AppBanner';
	import MovieCard from './components/MovieCard';

	export default {
		name      : 'app',
		components: {
			MovieCard,
			AppBanner,
			HelloWorld
		},
		data      : () => ({
			title : "IMDB clone",
			movies: []
		}),
		mounted   : function () {
			movieApi.getAll().then(movies => this.movies = movies)
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
