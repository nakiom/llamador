<script setup>
import axios from 'axios'	
import { mapGetters } from 'vuex'
</script>

<template>
	<listallamados>
		<ul>
			<li v-for="item in arrli" v-text="item.paciente +' (' +item.doctor+')' "></li>
		</ul>
		<span></span>
	</listallamados>
</template>

<script>

export default { 
	data(){
		return {
			arrli: ['cacho', 'pepe', 'jose', 'martin']
		}
	},
	computed: {
		...mapGetters({
		  // listaLlamados : "getLista"
		})
	},
	methods: {
		async setEmpresa(){
		  await this.$store.dispatch("setEmpresa","una nueva empresa").then(result=>{
		      console.log("nombre de empresa cambiada")
		    }).catch(error=>{
		      console.log(error)
		    })
		},
		async getLista(){
			 // axios.get('http://10.1.0.4/ws/listaPacientes')
			 axios.get('http://10.1.0.4/sgpc/HTML/ws/ws_interno.php?operacion=listarPacientes')
            .then(response => (this.arrli = response.data ))
		}
	},
	mounted() {
		// this.setEmpresa()
		this.getLista()
		// // this.setEmpresa()
		// // this.setEmpresa()
		// // this.setEmpresa()
	}
}
</script>

<style>
	
</style>