<template>
	<div class="row movie-details">
		<div class="col-md-4">
			<img :src="movie.Poster" alt="Poster">
		</div>
		<div class="col-md-8">
			<h1>{{movie.Title}}</h1>
			<p>{{movie.Plot}}</p>
			<p><b>Cast: </b>{{movie.Actors}}</p>
			<p><b>Release: </b>{{movie.Released}}</p>
			<div class="row ratings">
				<div
								class="col"
								v-for="rating in movie.Ratings"
								:key="rating.Source"
				>
					<div><b>{{rating.Source}}</b></div>
					<div>{{rating.Value}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : "movie-details",
		props: ['movie']
	}
</script>

<style scoped>

</style>