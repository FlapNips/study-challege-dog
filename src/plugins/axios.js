import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install (Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://dog.ceo/api/breeds/'
        }),
        Vue.prototype.$img = axios.create({
            baseURL: 'https://dog.ceo/api/breed/'
        })
        }
    })
