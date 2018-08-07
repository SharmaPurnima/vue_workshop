<template>
	<div class="details-page container">

		<movie-details :movie="movie"></movie-details>

		<div class="row">
			<div class="col">
				<button class="btn btn-light" @click="$router.push('/')">Home</button>
			</div>
		</div>
	</div>
</template>

<script>
	import MovieDetails from '../components/MovieDetails'
	import movieAPI from '../API/movies';

	export default {
		name      : "details-page",
		components: {
			MovieDetails
		},
		props     : ['id'],
		data      : () => ({
			movie: {}
		}),
		mounted   : function () {
			movieAPI.getDetails(this.id).then(movie => {
				this.movie = movie;
			})
		}
	}
</script>

<style scoped>
</style>