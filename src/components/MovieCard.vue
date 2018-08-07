<template>
	<div class="movie-card card">
		<img class="card-img-top" v-bind:src="movie.Poster" alt="Card image cap">
		<div class="card-body">
			<h5 class="card-title">{{ movie.Title }}</h5>
			<p class="card-text">{{ shortSummary }}</p>
			<p class="card-text movie-year">{{ movie.Year }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name    : "movie-card",
		props   : ['movie'],
		computed: {
			shortSummary: function () {
				return this.movie.Plot.substring(0, 100) + (this.movie.Plot.length > 100 ? '...' : '')
			}
		}
	}
</script>

<style scoped>
</style>