<script setup>
import axios from 'axios'	
import { mapGetters } from 'vuex'
</script>

<template>
	<div class="row">
		
	    <div class="col-sm-8 col-md-8 col-lg-8">
		Ultimos llamados..
		<listallamados>
			<ul>
				<li v-for="item in arreglo_llamados" v-text="item.timestamp + ' ' + item.paciente+' (Consultorio: ' +item.consultorio+' Piso: '+item.piso+')' " v-bind:class = "(item.nuevo==1)?'blink-text':''"
				 :data-nuevo=item.nuevo ></li>
			</ul>
		</listallamados>
		</div>
	    <div class="col-sm-4 col-md-4 col-lg-4">
			Proximos llamados..
			<listallamados>
				<ul>
					<li v-for="item in arreglo_espera" v-text="item.paciente +' (' +item.doctor+')' "></li>
				</ul>
				<span></span>
			</listallamados>
		</div>
	</div>
</template>

<script>

export default { 
	data(){
		return {
			arreglo_espera: [],
			arreglo_llamados: [],
			ultimo_llamado_piso: '',
			pisado:'todo por borrar aqui'
		}
	},
	computed: {
		...mapGetters({
		  // listaLlamados : "getLista"
		}),
	},
	methods: {
		async setEmpresa(){
		  await this.$store.dispatch("setEmpresa","una nueva empresa").then(result=>{
		      console.log("nombre de empresa cambiada")
		    }).catch(error=>{
		      console.log(error)
		    })
		},
		di: function(texto) {
			console.log(texto)
			    speechSynthesis.speak(new SpeechSynthesisUtterance("Lo llaman por consultorio 3"));
		},
		shouldIPlaySound: function(){
			console.log(this.arreglo_llamados)
			// arreglo_llamados.filter( function(elemento) {
			// 	console.log(elemento )
			// 	console.log("unacosa")
			// } );
		},
		playSound: function(){
			console.log("soundeandoooooo call")
			var audio = new Audio('bell.wav');
			audio.play();
		},
		cargar_pacientes_llamados: function(response) {

			this.arreglo_llamados = response;
			let letsplay = this.arreglo_llamados.filter( function(elemento) {
				if ( elemento.nuevo ==1 ) return true;
			} );
			console.log(letsplay.length)
			if (letsplay.length) this.playSound();
			return true
		},

		async getListaPacientesEspera(){
			 // axios.get('http://10.1.0.4/ws/listaPacientes')
			 axios.get('http://10.1.0.4/sgpc/HTML/ws/ws_interno.php?operacion=listarPacientesEspera')
            .then(response => (this.arreglo_espera = response.data ))
		} ,
		async getListaPacientesLlamados(){
			 // axios.get('http://10.1.0.4/ws/listaPacientes')
			 axios.get('http://10.1.0.4/sgpc/HTML/ws/ws_interno.php?operacion=listarPacientesLlamados&p=2')
            .then(response => ( this.cargar_pacientes_llamados( response.data) ))
            // .then(response => (this.arreglo_llamados = response.data ))
            // .then(response => console.log(response.data )  )
		},
	},
	mounted() {
		// this.setEmpresa()
		this.getListaPacientesEspera();
		this.getListaPacientesLlamados();
		this.shouldIPlaySound();

		// console.log(this.$router)
		// // this.setEmpresa()
		// // this.setEmpresa()
	}
}
</script>

<style>
	.blink-text{
		color: #000;
		font-weight: bold;
		font-size: 2rem;
		animation: blinkingText 2s infinite;
	}
	@keyframes blinkingText{
		0%		{ color: #10c018;}
		25%		{ color: #1056c0;}
		50%		{ color: #ef0a1a;}
		75%		{ color: #254878;}
		100%	{ color: #04a1d5;}
	}
</style>