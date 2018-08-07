<template>
	<div id="app">
		<app-banner v-bind:title="title"/>
		<div class="container">
			<div class="row">
				<div class="col-sm-4">
					<movie-card v-bind:movie="mockMovie"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mockMovie from './mocks/sample-movie'

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
			title: "IMDB clone",
			mockMovie
		})
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
