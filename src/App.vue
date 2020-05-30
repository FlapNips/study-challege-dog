<template>
	<div id="app" class="m-0 p-0 mx-auto h-100 w-100">
		<router-view >
			<b-img id="background-image" class="h-100 w-100"/>
		</router-view>
	</div>
</template>
<script>

</script>
<style>
	@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Chelsea+Market&family=Inconsolata&family=Lobster&family=Teko:wght@300&display=swap");

	#background-image {
		position: absolute;
		top: 0;
		min-width: max-content;
		min-height: max-content;
		left: 0;
		z-index: -1;
		background-size: cover;
		opacity: 0.5;
		background-image: url("https://avante.biz/wp-content/uploads/Dogs-Wallpapers/Dogs-Wallpapers-052.jpg");
	}
	#app {
	position: absolute;
	min-height: max-content!important;
	}
</style>