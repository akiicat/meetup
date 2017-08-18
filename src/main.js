import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDxpU7K0fJ3KoBhH4Pku87k54ql4LDLkgk',
      authDomain: 'meetup-9e36c.firebaseapp.com',
      databaseURL: 'https://meetup-9e36c.firebaseio.com',
      projectId: 'meetup-9e36c',
      storageBucket: 'meetup-9e36c.appspot.com'
    })
  }
})
