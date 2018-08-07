<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-4" v-for="movie in movies" :key="movie.id">
				<movie-card :movie="movie" v-on:movie-selected="onMovieSelected"></movie-card>
			</div>
		</div>
	</div>
</template>
<script>
	import MovieCard from '../components/MovieCard'
	import movieApi from '../API/movies';

	export default {
		name      : 'home-page',
		components: {
			MovieCard
		},
		data      : () => ({
			movies: []
		}),
		methods   : {
			onMovieSelected: function (id) {
				this.$router.push({path: `/details/${id}`})
			}
		},
		mounted   : function () {
			movieApi.getAll().then(movies => this.movies = movies)
		}
	}
</script>
