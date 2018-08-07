<template>
  <div id="app">
    <app-banner v-bind:title="title"/>
    <HelloWorld/>
  </div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	import AppBanner from './components/AppBanner';

	export default {
		name      : 'app',
		components: {
			AppBanner,
			HelloWorld
		},
		data      : () => ({
			title: "IMDB clone"
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
