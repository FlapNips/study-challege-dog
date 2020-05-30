<template>
	<b-row class="mx-auto p-0 m-0">
			<b-form 
				id="layout-form" 
				@submit.prevent="setSave(getBreedConfirm)" 
				class="col-xl-6 col-lg-6 col-xs-12 col-sm-12 p-1 m-0	 mx-auto"
				>
					<b-row class="m-0 p-0">
					<b-col 
						xl="5"
						lg="5"
						xs="12"
						class="mx-auto m-2 p-1">
						<label for="layout-breed">Escolha a raça:</label>
						<b-form-input
							id="layout-breed"
							required
							:state="getBreedConfirm"
							list="list-breed"
							v-model="onBreed"
							placeholder="ex: bulldog"
							class="layout-form-class mb-2"
						/>
						<b-form-datalist id="list-breed" class="h-20" :options="getBreedsAPI"></b-form-datalist>
					</b-col>
					<b-col 
						xl="5"
						lg="5"
						xs="12"
						class="m-2 p-1 mx-auto"
						>
						<label for="layout-namedog">Defina o nome:</label>
						<b-form-input
							id="layout-namedog"
							required
							v-model="onNameDog"
							placeholder="ex: Lupi"
							class="layout-form-class mb-2"
						/>
					</b-col>
					</b-row>
				<ChooseColor />
				<ChooseFont />
				<Submit />
			</b-form>
	</b-row>
</template>

<script>
import ChooseColor from "./InputForm/ChooseColor";
import ChooseFont from "./InputForm/ChooseFont";
import Submit from "./Submit";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
	components: {
		ChooseColor,
		ChooseFont,
		Submit
	},
	data() {
		return {
			save: false
		};
	},
	computed: {
		...mapGetters([
			"getFont",
			"getNameDog",
			"getColorText",
			"getBreed",
			"getImageDog",
			"getInformationDog",
			"getBreedConfirm",
			"getBreedAPI",
			"getBreedsAPI"
		]),
		onBreed: {
			get() {
				return this.getBreed;
			},
			set(value) {
				this.setBreed(value);
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
		},
		onNameDog: {
			get() {
				return this.getNameDog;
			},
			set(value) {
				this.setNameDog(value);
			}
		}
	},
	methods: {
		...mapMutations([
			"setBreed",
			"setNameDog",
			"setBreedConfirm",
			"setBreedsAPI",
			"setImageDog",
			"setInformationDog",
			"setSave",
			"setLoading"
		])
	},
	created() {
		this.$http
			.get("list")
			.then(res => {
				this.setBreedsAPI(res.data.message);
			})
			.catch(error => {
				console.log(error);
			});
	}
};
</script>
<style scoped>
	#layout-form {
		background-color: rgb(168, 168, 168);
		border-radius: 20px;
	}
</style>