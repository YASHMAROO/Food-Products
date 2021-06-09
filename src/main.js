import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import './fb'

Vue.config.productionTip = false

require('dotenv').config()
Vue.use(Vuetify)

let app;
//eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app=new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})
