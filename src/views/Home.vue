<template>
	<div id="layout-main" fluid class="m-0 mx-auto h-100 p-0">
		<b-row id="form-layout" class="m-0 h-100 p-0">
			<!-- FORM -->
			<b-col cols="12" class="m-0 p-0 mx-auto">
				<ImageDog/>
				<ImputForm/>
					<!-- SCREEN LOADING DB -->
					<b-col id="load-data" v-show="useDB" class="fade-in h-100 w-100">
						<div class="mx-auto my-auto text-center">
							<div class="m-1">Deseja carregar os dados ?</div>
							<div class="m-1">Último dado salvo : {{date}}</div>
							<div class="m-1">Horário : {{time}}</div>
							<b-row>
								<b-button
									@click="loadDB(); useDB = false"
									class="alert-center col-4 m-2 my-auto mx-auto btn-success"
								>Sim</b-button>
								<b-button
									@click="setResetAll(); useDB = false"
									class="alert-center col-4 m-2 my-auto mx-auto btn-danger"
								>Não</b-button>
							</b-row>
						</div>
					</b-col>
				<!-- SCREEN SAVE CONFIRMED -->
				<b-row id="save-confirmed" v-show="getSave" class="fade-in m-0 p-0 text-center h-100 w-100">
					<b-col class="my-auto h-25">
						<b-img id="image-sucess"
						src="https://www.pinclipart.com/picdir/big/0-9831_icon-icone-simbols-simbolo-certo-clipart-clip-art.png"
						class="h-100"
						/>
						<div>Salvo com sucesso !</div>
						<b-button @click="setBack(true)" class="btn-warning">Voltar</b-button>
					</b-col>
				</b-row>
				<!-- IMAGE BY SLOT ( APP ) -->
				<slot/>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import ImputForm from "@/components/LayoutInputForm.vue";
import ImageDog from "@/components/ImageDog.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
	components: {
		ImputForm,
		ImageDog
	},
	data() {
		return {
			success: false,
			useDB: false,
			date: '',
			time: ''
		};
	},
	computed: {
		...mapGetters([
			"getSave",
			"getDate",
			"getTime",
			"getBreed",
			"getInformationDog"
			])
	},

	methods: {
		...mapMutations([
			"setSave",
			"setInformationDog",
			"loadData",
			"setResetAll",
			"setBack"
		]),
		loadDB() {
			const json = localStorage.getItem("informationDog");
			const array = JSON.parse(json);
			if (Array.isArray(array)) {
				this.setInformationDog(array);
				this.loadData(array);
			}
		}
	},
	created() {
		const json = localStorage.getItem("informationDog");
		const array = JSON.parse(json);
		if (Array.isArray(array)) {
			this.useDB = true;
			this.date = array[0].date
			this.time = array[0].time
		} else {
			this.setInformationDog([]);
		}
	}
};
</script>
<style scoped>
	#layout-main {
		position: relative;
		min-height: max-content!important;
	}
	#load-data {
		position: absolute;
		display: flex;
		top: 0;
		left: 0;
		z-index: 10;
		justify-content: center;
		text-align: center;
		background-color: rgba(228, 126, 53, 0.9);
	}
	#save-confirmed {
		position: absolute;
		background: green;
		top: 0;
		left: 0;
		z-index: 15;
		height: max-content;
		width: max-content;
	}
	.alert-center {
		position: relative;
		height: 2em;
	}
	.fade-in {
		animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>