import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    appName: "vue-pug-stylus-template"
  },
  getters: {
    appName: state => state.appName
  }
})
