import Vue from 'vue'
import Vuex from 'vuex'

import championshipModule from './modules/championshipModule'
import clubModule from './modules/championshipModule'
import newsModule from './modules/newsModule'

Vue.use(Vuex);

export default new Vuex.Store({
  
   modules: {
       championshipModule, 
       clubModule,
       newsModule
   }
})