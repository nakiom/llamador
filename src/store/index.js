// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'
// import Llamados from './modules/llamados'

// Vue.use(Vuex)

export default createStore({
	state: {
		empresa: 'Clínica de Ojos del Sud S.A.'
	},
	getters: {
		getEmpresa(state) { 
			return state.empresa
		}
	},
	mutations: {
		setEmpresa(state,name) {
			state.empresa = name
		}
	},
	actions: {
		setEmpresa(context,name) {
			context.commit("setEmpresa",name)
		}
	},
	modules: {
		// Llamados,
		// otromodulo
	}
})
