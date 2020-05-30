<template>
	<b-row class="m-1">
		<b-button @click="setResetAll" class="btn btn-dark mr-auto">Resetar</b-button>
		<b-button @click="changeImg()" class="btn btn-dark mx-auto">Trocar Imagem</b-button>
		<b-button type="submit" class="btn btn-dark ml-auto">Salvar</b-button>
	</b-row>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
	computed: {
		...mapGetters([
			"getBreed",
			"getBreedConfirm",
			"getSave"
		])
	},
	methods: {
		...mapMutations(["setImageDog", "setLoading", "setResetAll"]),
		changeImg() {
			if (this.getBreedConfirm) {
				this.setLoading(true);
				this.$img
					.get(`${this.getBreed}/images/random`)
					.then(async res => {
						this.setImageDog(res.data.message);
					})
					.catch(error => {
						console.log(error);
					})
					.then(() => this.setLoading(false));
			} else {
				this.setImageDog(
					"https://sunrivermetalworks.com/wp-content/uploads/2016/07/SMW566-metal-dog-welcome-sign.jpg"
				);
			}
		}
	}
};
</script>