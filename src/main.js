// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false

// Vuex Store
const store = new Vuex.Store({
  state: {
    user: {},
    auth: null,
    token: '3Qty51oJcOMDDDq68sU04uZK3JtBFV1V',
    accessToken: {},
    bot: {}
  },
  mutations: {
    login (state, user) {
      state.user = user
    },
    accessToken (state, accessToken) {
      state.accessToken = accessToken
    },
    updateBot (state, bot) {
      state.bot = bot
    }
  }
})

// HTTP Request interpetor
Vue.http.options.root = 'http://localhost:9000/'

// eslint-disable no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
