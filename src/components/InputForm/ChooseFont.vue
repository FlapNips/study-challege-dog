<template>
	<b-container fluid class="p-0 text-center">
		<label for="radio-buttons-colors" class="col-12">Escolha a fonte do texto:</label>
		<b-row id="layout-fonts" buttons v-model="chooseFont" class="my-auto m-0 p-0">
			<div class="mx-auto col-12">
				<b-col
				xl="3"
				lg="4"
				xm="12"
					v-for="(font,index) in fontStyle"
					@click=" chooseFont = index"
					:value="font.value"
					:key="font.text"
					class="btn btn-secondary buttons-fonts m-2 p-0"
					:class="[classButtons(index), getFont==font.text ? 'choose-font-family-selected' : '']"
				>{{ font.text }}</b-col>
			</div>
		</b-row>
	</b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
	data() {
		return {
			fontStyle: [
				{
					text: "Balsamiq Sans",
				},
				{
					text: "Chelsea Market",
				},
				{
					text: "Inconsolata",
				},
				{
					text: "Lobster",
				},
				{
					text: "Teko",
				}
			]
		};
	},
	computed: {
		...mapGetters(["getFont"]),
		chooseFont: {
			get() {
				return this.getFont;
			},
			set(value) {
				let familyFont = this.fontStyle[value].text;
				this.setFont(familyFont);
			}
		}
	},
	methods: {
		...mapMutations(["setFont"]),
		classButtons(value) {
			return `choose-font-family-${value}`;
		}
	}
};
</script>

<style scoped>
	#layout-fonts {
		align-content: space-around !important;
	}
	.buttons-fonts {
		line-height: 3.5em;
		justify-content: center !important;
		border-radius: 20px !important;
		color: black;
	}
	.choose-font-0 {
		font-weight: bold;
	}
	.choose-font-family-selected {
		color: black !important;
		font-weight: bold;
		box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.75) !important;
	}
	.choose-font-family-0 {
		font-family: "Balsamiq Sans", cursive !important;
	}
	.choose-font-family-1 {
		font-family: "Chelsea Market", cursive !important;
	}
	.choose-font-family-2 {
		font-family: "Inconsolata", monospace !important;
	}
	.choose-font-family-3 {
		font-family: "Lobster", cursive !important;
	}
	.choose-font-family-4 {
		font-family: "Teko", sans-serif !important;
	}
</style>