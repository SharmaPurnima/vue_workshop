<template>
	<div class="page-banner jumbotron jumbotron-fluid">
		<div class="container">
			<h1 class="display-4">
				{{title}}
			</h1>
			<p class="lead">{{message}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name : "app-banner",
		props: ['title'],
		data : () => ({
			message: "Explore VueJS with an IMDB clone app"
		})
	}
</script>

<style scoped lang="scss">
	.page-banner {
		background: black;
		color: white;
		h1 {
			font-weight: bold;
		}
	}
</style>