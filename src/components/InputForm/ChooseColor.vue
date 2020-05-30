<template>
	<b-row class="py-3 text-center">
		<label for="radio-buttons-colors" class="col-12">Escolha a cor do texto:</label>
		<b-form-radio-group id="radio-buttons-colors" buttons v-model="onColorText" class="col-12 my-1 mx-1 mx-auto p-2">
			<template v-for="color in fontColors">
				<b-form-radio
					:value="color.value"
					:key="color.text"
					class="buttons-colors mx-1 col-12"
					:class="[onColorText==color.value ? `choose-${color.value}` : '']"
					:style="`background-color: ${color.backgroundColor}`"
				/>
			</template>
		</b-form-radio-group>
	</b-row>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			fontColors: [
				{
					text: "Vermelho",
					value: "red",
					backgroundColor: "#b61014"
				},
				{
					text: "Azul",
					value: "blue",
					backgroundColor: "#000fc6"
				},
				{
					text: "Preto",
					value: "black",
					backgroundColor: "#000000"
				},
				{
					text: "Amarelo",
					value: "yellow",
					backgroundColor: "#fff988"
				},
				{
					text: "Verde",
					value: "green",
					backgroundColor: "#a6ff88"
				}
			]
		};
	},
	computed: {
		...mapGetters(["getColorText"]),
		onColorText: {
			get() {
				return this.getColorText;
			},
			set(value) {
				this.setColorText(value);
			}
		}
	},
	methods: {
		...mapMutations(["setColorText"]),
		classButtons(value) {
			if (this.selected == value) {
				return `choose-${value}`;
			} else {
				return "";
			}
		}
	}
};
</script>

<style scoped>
	.buttons-colors {
		background-color: black;
		border-radius: 5px !important;
		color: black !important;
		height: 2.2em;
	}
	.btn {
		color: black !important;
	}
	.btn:hover {
		color: black !important;
		font-weight: bold;
	}
	.choose-red {
		font-weight: bold;
		box-shadow: 0px 0px 5px 5px rgba(255, 0, 0, 0.75) !important;
	}
	.choose-blue {
		font-weight: bold;
		box-shadow: 0px 0px 5px 5px rgb(128, 138, 255) !important;
	}
	.choose-yellow {
		font-weight: bold;
		box-shadow: 0px 0px 5px 5px rgba(255, 251, 25, 0.75) !important;
	}
	.choose-black {
		font-weight: bold;
		box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.75) !important;
	}
	.choose-green {
		font-weight: bold;
		box-shadow: 0px 0px 5px 5px rgb(159, 255, 128) !important;
	}
</style>