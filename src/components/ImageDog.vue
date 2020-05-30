<template>
	<b-row class="m-2 p-0 text-center">
		<b-overlay 
			id="layout-image" 
			:show="getLoading" 
			class="d-inline-block mx-auto" 
			rounded="circle"
			>
			<!-- INPUT IMAGE BREED -->
			<b-img 
			id="image-dog"
			:src="getImageDog" 
			rounded="circle" 
			class="mx-auto m-0 p-0"
			/>
			<!-- NAME DOG IN IMAGE -->
			<div id="layout-namedog" 
			:style="`color: ${getColorText};font-family: ${getFont};`"
			>
				{{getNameDog}}
			</div>	
		</b-overlay>
	</b-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters([
			'getBreed',
			'getNameDog',
			'getFont',
			'getLoading',
			'getColorText',
			'getImageDog'
		]),
	},
}
</script>

<style scoped>
#layout-image {
	max-width: 90vw!important;
  max-height: 50vh!important;
	font-size: 2em;
}
#layout-image > img {
  height: 40vh!important;
}
#layout-namedog {
	z-index: 3;
	position: absolute;
	font-size: 1em;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
}
#image-dog {
	max-width: inherit!important;
	max-height: inherit!important;
}
</style>