<template>
	<div id="app">
		<app-banner v-bind:title="title"></app-banner>
		<router-view></router-view>
	</div>
</template>

<script>
	import AppBanner from './components/AppBanner'

	export default {
		name      : 'app',
		components: {
			AppBanner
		},
		data      : () => ({
			title: "IMDB clone"
		})
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
