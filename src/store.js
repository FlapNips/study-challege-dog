
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breed: '',
    breedsAPI: [],
    nameDog: '',
    colorText: 'black',
    font: 'Chelsea Market',
    imageDog: 'https://sunrivermetalworks.com/wp-content/uploads/2016/07/SMW566-metal-dog-welcome-sign.jpg',
    informationDog: [],
    breedConfirm: null,
    save: false,
    loading: false,
    date: '',
    time: '',
  },
  mutations: {
    setBreed(state, payload) {
      state.breed = payload
    },
    setBreedsAPI(state, payload) {
      state.breedsAPI = payload
    },
    setNameDog(state, payload) {
      state.nameDog = payload
    },
    setColorText(state, payload) {
      state.colorText = payload
    },
    setFont(state, payload) {
      state.font = payload
    },
    setImageDog(state, payload) {
      state.imageDog = payload
    },
    setResetAll(state) {
      state.breed = '';
      state.nameDog = '';
      state.colorText = 'black';
      state.font = 'Chelsea Market';
      state.imageDog = 'https://sunrivermetalworks.com/wp-content/uploads/2016/07/SMW566-metal-dog-welcome-sign.jpg';
      localStorage.removeItem('informationDog')
    },
    setInformationDog(state, payload) {
      state.informationDog = payload
    },
    setBreedConfirm(state, payload) {
      state.breedConfirm = payload
    },
    setSave(state, payload) {
      if (payload) {
        let today = new Date();
        const hh = today.getHours();
        const min = today.getMinutes();
        const sec = today.getMinutes();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = `${dd} / ${mm} / ${yyyy}`
        let time = `${hh}:${min}:${sec}`
        state.informationDog = [{
          name: state.nameDog,
          breed: state.breed,
          font: state.font,
          color: state.colorText,
          image: state.imageDog,
          date: today,
          time: time
        }];
        console.log(state.informationDog)
        state.save = true
        localStorage.setItem('informationDog', JSON.stringify(state.informationDog))
      } else {
        console.log('Erro ao salvar')
      }
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setBack(state, payload) {
      state.save = !payload
    },
    loadData(state, payload) {
      state.breed = payload[0].breed
      state.nameDog = payload[0].name
      state.colorText = payload[0].color
      state.font = payload[0].font
      state.imageDog = payload[0].image
      state.date = payload[0].data
      state.time = payload[0].time

    }
  },
  getters: {
    getBreed(state) {
      return state.breed
    },
    getBreedsAPI(state) {
      return state.breedsAPI
    },
    getNameDog(state) {
      return state.nameDog
    },
    getColorText(state) {
      return state.colorText
    },
    getFont(state) {
      return state.font
    },
    getImageDog(state) {
      return state.imageDog
    },
    getInformationDog(state) {
      return state.informationDog
    },
    getBreedConfirm(state) {
      if (state.breedsAPI.includes(state.breed)) {
        return true
      } else {
        return false
      }
    },
    getTime(state){
      return state.time
    },
    getDate(state){
      return state.date
    },
    getSave(state) {
      return state.save
    },
    getLoading(state) {
      return state.loading
    },
  },
})